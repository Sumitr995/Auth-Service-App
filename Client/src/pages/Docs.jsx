import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import DocNavLink from '@/components/Docs/DocNavLink'
import Bullet from '@/components/Docs/Bullet'
import {
  BookOpen,
  KeyRound,
  Layers,
  ShieldCheck,
  Terminal,
  Users,
} from 'lucide-react'

const DOC_NAV_ITEMS = [
  { id: 'introduction', label: 'Introduction', Icon: BookOpen },
  { id: 'quickstart', label: 'Quickstart', Icon: Terminal },
  { id: 'authentication', label: 'Authentication', Icon: KeyRound },
  { id: 'user-management', label: 'User Management', Icon: Users },
  { id: 'tenancy', label: 'Tenancy (V1)', Icon: Layers },
]

const Docs = ({ Sign, setSign }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen pt-16 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
      <Navbar Sign={Sign} setSign={setSign} />

      <main>
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="mesh-gradient-hero pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[min(1100px,100%)] -translate-x-1/2"
          />

          <div className="relative mx-auto max-w-[1400px] px-6 py-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
              {/* Sidebar */}
              <aside className="hidden md:block">
                <div className="sticky top-24">
                  <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Documentation</div>
                  <div className="mt-2 text-caption-mono text-(--mute)">v1.0</div>

                  <nav className="mt-6 flex flex-col gap-1">
                    {DOC_NAV_ITEMS.map((item, idx) => (
                      <DocNavLink
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        Icon={item.Icon}
                        active={idx === 0}
                      />
                    ))}
                  </nav>

                  <div className="mt-10 card-marketing p-6 micro-lift micro-border">
                    <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Get started</div>
                    <div className="mt-2 text-body-sm text-(--body)">
                      Create a developer account and generate an API key.
                    </div>
                    <button
                      type="button"
                      className="button-primary cursor-pointer mt-5 w-full"
                      onClick={() => {
                        navigate('/register')
                        setSign('Sign Up')
                      }}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="min-w-0">
                {/* Mobile quick nav */}
                <div className="md:hidden card-marketing p-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {DOC_NAV_ITEMS.map((item, idx) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={[
                          'shrink-0 rounded-full border border-(--hairline) bg-(--canvas) px-4 py-2 text-body-sm',
                          idx === 0 ? 'text-(--ink)' : 'text-(--body)',
                        ].join(' ')}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <section id="introduction" className="scroll-mt-28">
                  <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Phase One</div>
                  <h1 className="mt-4 text-display-xl text-(--ink)">Getting Started</h1>
                  <p className="mt-6 text-body-lg text-(--body) max-w-[760px]">
                    AuthVault V1 is a developer-focused Auth SaaS direction: you log into a dashboard, generate an API key,
                    call auth APIs from your product, and then view users/sessions under your developer scope.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="card-marketing micro-lift micro-border micro-group p-8">
                      <div className="micro-icon grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
                        <KeyRound className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-6 text-display-sm text-(--ink)">Secure API key rotation</h3>
                      <p className="mt-3 text-body-sm text-(--body)">
                        Generate and rotate keys from the dashboard without breaking your existing auth foundation.
                      </p>
                    </div>

                    <div className="card-marketing micro-lift micro-border micro-group p-8">
                      <div className="micro-icon grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
                        <ShieldCheck className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-6 text-display-sm text-(--ink)">Phase 0 compatibility</h3>
                      <p className="mt-3 text-body-sm text-(--body)">
                        Keep register/login/OTP/reset flows stable while the SaaS layer evolves.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="quickstart" className="scroll-mt-28 mt-14">
                  <div className="card-marketing p-10">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
                        <Terminal className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-display-sm text-(--ink)">Quickstart</div>
                        <div className="mt-1 text-body-sm text-(--body)">The developer → API key → users loop.</div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <Bullet>Create a developer account and sign in to the dashboard.</Bullet>
                      <Bullet>Generate an API key (store it safely in your backend environment).</Bullet>
                      <Bullet>Send auth requests with that API key so the backend resolves your developer tenant.</Bullet>
                      <Bullet>View created users/sessions in the dashboard.</Bullet>
                    </div>

                    <div className="mt-10 overflow-hidden rounded-[min(var(--radius-md),12px)] border border-(--hairline) bg-(--ink)">
                      <div className="flex items-center gap-2 border-b border-(--hairline) border-opacity-20 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-(--hairline-strong) opacity-60" />
                        <span className="h-2.5 w-2.5 rounded-full bg-(--hairline-strong) opacity-45" />
                        <span className="h-2.5 w-2.5 rounded-full bg-(--hairline-strong) opacity-30" />
                        <span className="ml-auto text-caption-mono text-(--on-primary) opacity-70">TERMINAL — SETUP</span>
                      </div>
                      <pre className="text-code p-6 text-(--on-primary) overflow-x-auto">
{`# install client dependencies
bun install

# (dashboard) generate an API key
# copy it into your backend env
AUTHVAULT_API_KEY=\"atk_live_...\"

# send requests with the API key
curl -X POST https://api.your-domain.com/v1/authenticate \\
  -H \"x-api-key: $AUTHVAULT_API_KEY\" \\
  -H \"content-type: application/json\" \\
  -d '{"email":"user@acme.com","password":"..."}'\n`}
                      </pre>
                    </div>
                  </div>
                </section>

                <section id="authentication" className="scroll-mt-28 mt-14">
                  <div className="text-display-lg text-(--ink)">API Reference</div>
                  <p className="mt-3 text-body-sm text-(--body) max-w-[760px]">
                    Requests are scoped by your API key. The platform resolves the developer, then processes auth for end users
                    under that developer.
                  </p>

                  <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="card-marketing p-8">
                      <div className="inline-flex items-center gap-2 rounded-full border border-(--hairline) bg-(--canvas) px-3 py-1 text-caption-mono text-(--body)">
                        <span className="text-(--ink)">POST</span>
                        <span>/v1/authenticate</span>
                      </div>
                      <h3 className="mt-6 text-display-sm text-(--ink)">Initiate login</h3>
                      <p className="mt-3 text-body-sm text-(--body)">
                        Starts an authentication flow. Requires an API key so the backend can identify the developer.
                      </p>

                      <div className="mt-8">
                        <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Parameters</div>
                        <div className="mt-4 grid grid-cols-1 gap-3">
                          <div className="grid grid-cols-12 gap-3 rounded-lg border border-(--hairline) bg-(--canvas) px-4 py-3">
                            <div className="col-span-4 text-caption-mono text-(--ink)">email</div>
                            <div className="col-span-8 text-body-sm text-(--body)">End user email address.</div>
                          </div>
                          <div className="grid grid-cols-12 gap-3 rounded-lg border border-(--hairline) bg-(--canvas) px-4 py-3">
                            <div className="col-span-4 text-caption-mono text-(--ink)">password</div>
                            <div className="col-span-8 text-body-sm text-(--body)">End user password.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card-marketing p-8">
                      <div className="text-caption-mono text-(--mute) uppercase tracking-widest">Request example</div>
                      <div className="mt-4 rounded-lg border border-(--hairline) bg-(--canvas-soft-2) p-4">
                        <pre className="text-code text-(--ink) overflow-x-auto">{`{
  "email": "user@acme.com",
  "password": "..."
}`}</pre>
                      </div>

                      <div className="mt-8 text-caption-mono text-(--mute) uppercase tracking-widest">Response example</div>
                      <div className="mt-4 rounded-lg border border-(--hairline) bg-(--canvas-soft-2) p-4">
                        <pre className="text-code text-(--ink) overflow-x-auto">{`{
  "status": "ok",
  "userId": "...",
  "session": {
    "expiresAt": "..."
  }
}`}</pre>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="user-management" className="scroll-mt-28 mt-14">
                  <div className="text-display-lg text-(--ink)">User management</div>
                  <p className="mt-3 text-body-sm text-(--body) max-w-[760px]">
                    Users are scoped by developer. The same email can exist under different developers.
                  </p>

                  <div className="mt-8 card-marketing p-10 micro-lift micro-border">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
                        <Users className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-display-sm text-(--ink)">Developer-scoped users</div>
                        <div className="mt-1 text-body-sm text-(--body)">A clean tenant boundary for V1.</div>
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <Bullet>Users belong to a developer via `developerId`.</Bullet>
                      <Bullet>Same email can exist across different developers.</Bullet>
                      <Bullet>Projects are intentionally not part of V1.</Bullet>
                    </div>
                  </div>
                </section>

                <section id="tenancy" className="scroll-mt-28 mt-14">
                  <div className="text-display-lg text-(--ink)">Tenancy (V1)</div>
                  <p className="mt-3 text-body-sm text-(--body) max-w-[760px]">
                    V1 tenancy is simplified: Developer → Users. Multi-project support arrives in V2.
                  </p>

                  <div className="mt-8 card-marketing p-10 micro-lift micro-border">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-xl border border-(--hairline) bg-(--canvas-soft-2)">
                        <Layers className="h-5 w-5 text-(--ink)" strokeWidth={1.8} />
                      </div>
                      <div>
                        <div className="text-display-sm text-(--ink)">Developer → Users</div>
                        <div className="mt-1 text-body-sm text-(--body)">No projects/apps per developer in V1.</div>
                      </div>
                    </div>
                  </div>
                </section>
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

export default Docs
