import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import StatusBadge from '@/components/Features/StatusBadge'
import FeatureCard from '@/components/Features/FeatureCard'
import {
  Check,
  Clock,
  Globe,
  KeyRound,
  Lock,
  Mail,
  ShieldCheck,
  LayoutDashboard,
  Timer,
  Layers,
  Users,
} from 'lucide-react'

const FEATURE_CARDS = [
  {
    title: 'Developer dashboard',
    description:
      'A developer-first control plane to manage users, sessions, docs, settings, and API keys — built for SaaS UI demos.',
    Icon: LayoutDashboard,
    points: ['Overview, Users, API Keys, Sessions', 'Docs + Settings pages', 'Designed for a real SaaS feel'],
  },
  {
    title: 'API key platform (V1)',
    description:
      'Generate an API key for your developer account and use it to scope authentication requests from your app.',
    Icon: KeyRound,
    points: ['API key generation in dashboard', 'Backend API key validation', 'Developer-scoped auth'],
  },
  {
    title: 'Multi-tenant-ready (simplified)',
    description:
      'V1 uses a simple, safe tenant boundary: one developer owns many end users (no “projects” yet).',
    Icon: Layers,
    points: ['Developer → Users model', 'Same email can exist per developer', 'Projects come in V2'],
  },
  {
    title: 'Phase 0 auth flows (kept stable)',
    description:
      'The original MERN auth system remains functional while the SaaS layer evolves — no risky rewrites.',
    Icon: Mail,
    points: ['Email verification (OTP)', 'Reset password via email', 'JWT + HTTP-only cookies'],
  },
  {
    title: 'Secure credential handling',
    description:
      'Security fundamentals are built in: hashed passwords, careful token handling, and practical recovery workflows.',
    Icon: Lock,
    points: ['bcryptjs password hashing', 'JWT-based sessions', 'Recovery-friendly patterns'],
  },
  {
    title: 'Sessions & visibility',
    description:
      'Track authentication activity and make it visible inside the dashboard — the core SaaS feedback loop.',
    Icon: Timer,
    points: ['Sessions concept baked in', 'Users visible per developer', 'Audit-friendly UI direction'],
  },
]

const ROADMAP_ROWS = [
  {
    phase: 'Phase 0 — core MERN auth',
    status: 'Stable',
    note: 'Register, login/logout, OTP verify, reset password, JWT, HTTP-only cookies',
  },
  {
    phase: 'SaaS UI foundation',
    status: 'Building',
    note: 'Landing + dashboard UI, docs UI, API key UI (mock data OK for demos)',
  },
  {
    phase: 'Developer system',
    status: 'Next',
    note: 'Developer entity + dashboard auth (do not break Phase 0)',
  },
  {
    phase: 'API key generation',
    status: 'Next',
    note: 'Generate + rotate API key from dashboard',
  },
  {
    phase: 'Developer-scoped users',
    status: 'Next',
    note: 'Add developerId to User model + validate API key middleware',
  },
  {
    phase: 'Sessions tracking',
    status: 'Later',
    note: 'Session entity persisted and visible in dashboard',
  },
  {
    phase: 'OAuth, RBAC, MFA, SDKs',
    status: 'Later',
    note: 'Planned — explicitly out of scope for V1',
  },
  {
    phase: 'Multi-project support',
    status: 'Later',
    note: 'Developer → Projects → Users arrives in V2',
  },
]

const Features = ({ Sign, setSign }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-16 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
      <Navbar Sign={Sign} setSign={setSign} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-20 pb-24">
          <div
            aria-hidden="true"
            className="mesh-gradient-hero pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[min(1000px,100%)] -translate-x-1/2"
          />

          <div className="relative mx-auto max-w-[1200px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--hairline) bg-(--canvas) px-3 py-1 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-(--link-blue) animate-pulse" />
              <span className="text-caption-mono text-(--body) uppercase tracking-widest">
                Auth SaaS V1 • API keys • Developer dashboard • Multi-tenant-ready (simplified)
              </span>
            </div>

            <h1 className="mt-10 text-display-xl text-(--ink) max-w-[900px]">
              API-key authentication for your product. A dashboard for your users.
            </h1>

            <p className="mt-6 text-body-lg text-(--body) max-w-[720px]">
              AuthVault is evolving from a MERN auth app into an Auth-as-a-Service platform: developers sign in, generate
              an API key, call auth APIs from their apps, and then see end users + sessions inside a developer dashboard.
              V1 stays intentionally simple: one developer owns many users (projects come later).
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                className="button-primary cursor-pointer px-10 shadow-lg shadow-black/5"
                onClick={() => {
                  navigate('/register')
                  setSign('Sign Up')
                }}
              >
                Create Developer Account
              </button>
              <button
                type="button"
                className="button-secondary cursor-pointer px-10"
                onClick={() => navigate('/integration')}
              >
                See Integration
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="card-marketing micro-lift micro-border micro-group p-6">
                <div className="flex items-center gap-3">
                  <div className="micro-icon grid h-10 w-10 place-items-center rounded-lg border border-(--hairline) bg-(--canvas-soft-2)">
                    <KeyRound className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-body-sm-strong text-(--ink)">API-key scoped</div>
                    <div className="text-body-sm text-(--body)">Every request resolves to a developer</div>
                  </div>
                </div>
              </div>

              <div className="card-marketing micro-lift micro-border micro-group p-6">
                <div className="flex items-center gap-3">
                  <div className="micro-icon grid h-10 w-10 place-items-center rounded-lg border border-(--hairline) bg-(--canvas-soft-2)">
                    <Users className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-body-sm-strong text-(--ink)">Multi-tenant (V1)</div>
                    <div className="text-body-sm text-(--body)">Developer → Users boundary</div>
                  </div>
                </div>
              </div>

              <div className="card-marketing micro-lift micro-border micro-group p-6">
                <div className="flex items-center gap-3">
                  <div className="micro-icon grid h-10 w-10 place-items-center rounded-lg border border-(--hairline) bg-(--canvas-soft-2)">
                    <ShieldCheck className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-body-sm-strong text-(--ink)">Phase 0 preserved</div>
                    <div className="text-body-sm text-(--body)">No breaking refactors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V1 scope */}
        <section className="section-invert relative overflow-hidden px-6 py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-56 w-[min(1100px,100%)] -translate-x-1/2 rounded-full bg-(--canvas-soft) opacity-20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-[1200px]">
            <div className="text-center">
              <div className="text-caption-mono text-(--section-fg) opacity-70 uppercase tracking-widest">V1 scope</div>
              <h2 className="mt-3 text-display-lg">Simple by design.</h2>
              <p className="mt-4 text-body-sm text-(--section-fg) opacity-80 max-w-[760px] mx-auto">
                This version is focused on a clean developer experience: dashboard + API keys + scoped users.
                Advanced enterprise features come later.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="micro-lift rounded-xl border border-(--section-fg) border-opacity-15 bg-(--section-bg)">
                <div className="px-8 py-6 border-b border-(--section-fg) border-opacity-15">
                  <div className="text-caption-mono text-(--section-fg) opacity-70 uppercase tracking-widest">Included now</div>
                  <div className="mt-2 text-display-sm">Dashboard + API-key auth platform.</div>
                </div>
                <div className="px-8 py-7 space-y-3">
                  {[
                    'Developer account login for dashboard',
                    'API key generation & validation flow',
                    'Developer → Users scoping (multi-tenant-ready)',
                    'Users/sessions visibility inside dashboard',
                    'Phase 0 auth flows remain functional',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-body-sm text-(--section-fg) opacity-90">
                      <Check className="mt-0.5 h-5 w-5 text-(--section-fg)" strokeWidth={1.8} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="micro-lift rounded-xl border border-(--section-fg) border-opacity-15 bg-(--section-bg)">
                <div className="px-8 py-6 border-b border-(--section-fg) border-opacity-15">
                  <div className="text-caption-mono text-(--section-fg) opacity-70 uppercase tracking-widest">Later</div>
                  <div className="mt-2 text-display-sm">Not in scope for V1.</div>
                </div>
                <div className="px-8 py-7 space-y-3">
                  {[
                    'Multiple projects/apps per developer',
                    'OAuth providers (Google/GitHub)',
                    'SDKs & React component library',
                    'Organizations, enterprise RBAC',
                    'MFA / magic links / webhooks / analytics',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-body-sm text-(--section-fg) opacity-90">
                      <Clock className="mt-0.5 h-5 w-5 text-(--section-fg)" strokeWidth={1.8} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature grid */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Features</div>
                <h2 className="mt-3 text-display-lg text-(--ink)">Production-grade building blocks.</h2>
                <p className="mt-4 text-body-sm text-(--body) max-w-[720px]">
                  Built as an incremental refactor: keep Phase 0 stable, add a developer layer, then ship API-key scoped
                  auth APIs and dashboard visibility.
                </p>
              </div>

              <button
                type="button"
                className="button-secondary cursor-pointer px-8"
                onClick={() => navigate('/integration')}
              >
                View Integration
              </button>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {FEATURE_CARDS.map(({ title, description, Icon: FeatureIcon, points }) => (
                <FeatureCard
                  key={title}
                  title={title}
                  description={description}
                  Icon={FeatureIcon}
                  points={points}
                  BulletIcon={Check}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="card-marketing overflow-hidden">
              <div className="px-8 py-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Roadmap</div>
                    <h2 className="mt-3 text-display-lg text-(--ink)">What’s shipped vs. what’s next.</h2>
                    <p className="mt-4 text-body-sm text-(--body) max-w-[720px]">
                      Safe refactor order matters here: the original auth remains usable while the SaaS layer is added.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="button-primary cursor-pointer px-8"
                    onClick={() => navigate('/pricing')}
                  >
                    See Pricing
                  </button>
                </div>
              </div>

              <div className="border-t border-(--hairline)">
                <div className="grid grid-cols-12 gap-0 px-8 py-4 text-caption-mono text-(--mute) uppercase tracking-widest">
                  <div className="col-span-5">Phase</div>
                  <div className="col-span-3">Status</div>
                  <div className="col-span-4">Description</div>
                </div>
                <div className="border-t border-(--hairline)" />
                {ROADMAP_ROWS.map((row) => (
                  <div
                    key={row.phase}
                    className="micro-row grid grid-cols-12 gap-0 px-8 py-5 border-t border-(--hairline) bg-(--canvas)"
                  >
                    <div className="col-span-12 sm:col-span-5 text-body-sm-strong text-(--ink)">{row.phase}</div>
                    <div className="col-span-12 sm:col-span-3 mt-3 sm:mt-0">
                      <StatusBadge status={row.status} />
                    </div>
                    <div className="col-span-12 sm:col-span-4 mt-3 sm:mt-0 text-body-sm text-(--body)">{row.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className="px-6 pb-32">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Tech stack</div>
                <h2 className="mt-3 text-display-lg text-(--ink)">MERN-native by design.</h2>
                <p className="mt-4 text-body-sm text-(--body)">
                  The system is built around the tools you already use — Express + MongoDB on the backend, React on the
                  frontend — with a clean API surface for integration.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    'Node.js',
                    'Express.js',
                    'MongoDB',
                    'Mongoose',
                    'JWT',
                    'bcryptjs',
                    'cookie-parser',
                    'cors',
                    'Nodemailer',
                    'React',
                    'Axios',
                    'React Router',
                    'React-Toastify',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-(--hairline) bg-(--canvas) px-3 py-1 text-caption-mono text-(--body)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    className="button-primary cursor-pointer px-10"
                    onClick={() => navigate('/integration')}
                  >
                    Start Integrating
                  </button>
                  <button
                    type="button"
                    className="button-secondary cursor-pointer px-10"
                    onClick={() => window.open('https://github.com/Sumitr995/Auth-Service-App', '_blank', 'noopener,noreferrer')}
                  >
                    View Source
                  </button>
                </div>
              </div>

              <div className="card-marketing p-10">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
                    <Globe className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-display-sm text-(--ink)">A practical workflow.</div>
                    <div className="mt-1 text-body-sm text-(--body)">The developer → API key → users loop.</div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    {
                      title: 'Create developer account',
                      text: 'Sign up and access the dashboard to manage your auth layer.',
                    },
                    {
                      title: 'Generate API key',
                      text: 'Create (and later rotate) a key used to scope auth requests.',
                    },
                    {
                      title: 'Integrate auth APIs',
                      text: 'Send requests with the API key so the backend resolves the developer tenant.',
                    },
                    {
                      title: 'View users & sessions',
                      text: 'End users authenticate, and you can inspect them inside the dashboard.',
                    },
                  ].map((step) => (
                    <div key={step.title} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 text-(--link-blue)" strokeWidth={1.8} />
                      <div>
                        <div className="text-body-md-strong text-(--ink)">{step.title}</div>
                        <div className="mt-1 text-body-sm text-(--body)">{step.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        githubUrl="https://github.com/Sumitr995"
        linkedinUrl="https://www.linkedin.com/in/sumitr995"
        portfolioUrl="https://sumitr995.me"
        email="itzsumitr995@gmail.com"
      />
    </div>
  )
}

export default Features
