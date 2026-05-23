import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Home = ({ Sign, setSign }) => {
  return (
    <div className="min-h-screen bg-[var(--canvas-soft)] selection:bg-[var(--link-blue)] selection:text-white">
      <Navbar Sign={Sign} setSign={setSign} />
      <main>
        <Header Sign={Sign} setSign={setSign} />
        
        {/* Additional Section Example - Feature Grid */}
        <section className="py-24 px-6 bg-[var(--canvas)] border-y border-[var(--hairline)]">
          <div className="mx-auto max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Passwordless Auth', desc: 'Secure your users with magic links, OTPs, and biometric passkeys out of the box.' },
                { title: 'Multi-Tenant RBAC', desc: 'Scale from single users to enterprise teams with built-in roles and permissions.' },
                { title: 'Custom UI Components', desc: 'Beautifully designed, pre-built components that match your brand perfectly.' }
              ].map((feature, i) => (
                <div key={i} className="card-marketing p-8 group hover:border-[var(--mute)] transition-all">
                   <h3 className="text-display-sm text-[var(--ink)] mb-3">{feature.title}</h3>
                   <p className="text-body-sm text-[var(--body)]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Polarity-Flipped Section */}
        <section className="py-32 px-6 bg-[var(--ink)] text-[var(--canvas)]">
          <div className="mx-auto max-w-[1200px] text-center">
             <h2 className="text-display-lg mb-8">
               Integrate in minutes, scale for years.
             </h2>
             <p className="text-body-lg brightness-150 max-w-[700px] mx-auto mb-12">
               Our SDKs and APIs are built for developers who care about speed, security, and the user experience.
             </p>
             <button className="button-secondary px-8 bg-[var(--canvas)] text-[var(--ink)]">
               Explore the SDKs
             </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-[var(--hairline)] text-center bg-[var(--canvas-soft)]">
        <div className="text-caption-mono text-[var(--mute)] uppercase tracking-widest mb-4">
          Auth Service App — 2026
        </div>
        <p className="text-body-sm text-[var(--body)]">
          Built with Inter and JetBrains Mono.
        </p>
      </footer>
    </div>
  )
}

export default Home
