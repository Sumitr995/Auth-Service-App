import fs from 'node:fs/promises';
import path from 'node:path';

const projectRoot = path.resolve(process.cwd());
const srcRoot = path.join(projectRoot, 'src');

const SOURCE_EXTS = new Set(['.js', '.jsx', '.mjs', '.ts', '.tsx']);
const RESOLVE_EXTS = ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.json'];

function isLocalSpecifier(specifier) {
  return specifier.startsWith('./') || specifier.startsWith('../') || specifier === '.' || specifier === '..';
}

function stripQuery(specifier) {
  const qIndex = specifier.indexOf('?');
  return qIndex === -1 ? specifier : specifier.slice(0, qIndex);
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === 'dist') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (SOURCE_EXTS.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

function extractSpecifiers(code) {
  const specifiers = new Set();

  // import ... from 'x' / export ... from 'x'
  const staticRe = /(?:^|\n)\s*(?:import|export)\s+(?:[^'"\n;]+?\s+from\s+)?["']([^"']+)["']/g;
  for (let match; (match = staticRe.exec(code)); ) specifiers.add(match[1]);

  // dynamic import('x')
  const dynamicRe = /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g;
  for (let match; (match = dynamicRe.exec(code)); ) specifiers.add(match[1]);

  return [...specifiers];
}

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function resolveLocalImport(fromFile, rawSpecifier) {
  const specifier = stripQuery(rawSpecifier);
  const fromDir = path.dirname(fromFile);
  const candidate = path.resolve(fromDir, specifier);

  // If exact path exists as a file
  if (await pathExists(candidate)) {
    const stat = await fs.stat(candidate);
    if (stat.isFile()) return candidate;
    if (stat.isDirectory()) {
      for (const ext of RESOLVE_EXTS) {
        const indexFile = path.join(candidate, `index${ext}`);
        if (await pathExists(indexFile)) return indexFile;
      }
    }
  }

  // Try with extensions
  for (const ext of RESOLVE_EXTS) {
    const withExt = `${candidate}${ext}`;
    if (await pathExists(withExt)) return withExt;
  }

  // Try directory index
  if (await pathExists(candidate)) {
    const stat = await fs.stat(candidate);
    if (stat.isDirectory()) {
      for (const ext of RESOLVE_EXTS) {
        const indexFile = path.join(candidate, `index${ext}`);
        if (await pathExists(indexFile)) return indexFile;
      }
    }
  }

  return null;
}

async function detectCaseMismatch(absPath) {
  const normalized = path.normalize(absPath);
  const parsed = path.parse(normalized);
  const root = parsed.root; // e.g. C:\
  const rel = normalized.slice(root.length);
  const segments = rel.split(path.sep).filter(Boolean);

  let current = root;
  const mismatches = [];

  for (const seg of segments) {
    let entries;
    try {
      entries = await fs.readdir(current, { withFileTypes: true });
    } catch {
      return { ok: false, mismatches: [{ at: current, expected: seg, actual: null }] };
    }

    const match = entries.find((e) => e.name.toLowerCase() === seg.toLowerCase());
    if (!match) {
      return { ok: false, mismatches: [{ at: current, expected: seg, actual: null }] };
    }

    if (match.name !== seg) {
      mismatches.push({ at: current, expected: seg, actual: match.name });
    }

    current = path.join(current, match.name);
  }

  return { ok: mismatches.length === 0, mismatches };
}

async function main() {
  if (!(await pathExists(srcRoot))) {
    console.error(`Could not find src/ at: ${srcRoot}`);
    process.exit(2);
  }

  const files = await walk(srcRoot);
  const problems = [];

  for (const file of files) {
    const code = await fs.readFile(file, 'utf8');
    const specifiers = extractSpecifiers(code);

    for (const spec of specifiers) {
      if (!isLocalSpecifier(spec)) continue;

      const resolved = await resolveLocalImport(file, spec);
      if (!resolved) {
        problems.push({
          type: 'missing',
          file,
          spec,
          resolved: null,
        });
        continue;
      }

      const { ok, mismatches } = await detectCaseMismatch(resolved);
      if (!ok) {
        problems.push({
          type: 'case',
          file,
          spec,
          resolved,
          mismatches,
        });
      }
    }
  }

  if (problems.length === 0) {
    console.log('✅ All local (relative) imports resolve and match path casing.');
    return;
  }

  console.log(`❌ Found ${problems.length} import problem(s):`);
  for (const p of problems) {
    const relFile = path.relative(projectRoot, p.file);
    if (p.type === 'missing') {
      console.log(`\n[MISSING] ${relFile}`);
      console.log(`  -> ${p.spec}`);
    } else {
      console.log(`\n[CASE] ${relFile}`);
      console.log(`  -> ${p.spec}`);
      console.log(`  resolved: ${path.relative(projectRoot, p.resolved)}`);
      for (const m of p.mismatches) {
        const at = path.relative(projectRoot, m.at) || m.at;
        console.log(`    at ${at}: expected '${m.expected}' but actual is '${m.actual ?? '???'}'`);
      }
    }
  }

  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
