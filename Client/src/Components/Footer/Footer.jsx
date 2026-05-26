import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const InlineSvgIcon = ({ svg }) => {
  if (!svg) return null
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center [&>svg]:block [&>svg]:h-4 [&>svg]:w-4"
      // SVGs are local static assets (not user input).
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}

const Footer = ({
  githubUrl,
  linkedinUrl,
  portfolioUrl,
  email,
}) => {
  const navigate = useNavigate()
  const year = new Date().getFullYear()
  const emailHref = email ? (email.startsWith('mailto:') ? email : `mailto:${email}`) : undefined

  return (
    <footer className="border-t border-(--hairline) bg-(--canvas-soft)">
      <div className="gradient-accent" />

      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2.5"
            >
              <img src={assets.favicon} alt="Logo" className="h-6 w-6" />
              <span className="text-display-sm text-(--ink)">SUMIT</span>
            </button>

            <p className="mt-4 max-w-[420px] text-body-sm text-(--body)">
              Authentication components and flows for modern SaaS apps.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3">
            <div>
              <div className="text-caption-mono text-(--mute) uppercase tracking-widest">
                Product
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Link className="text-body-sm text-(--body) hover:text-(--ink)" to="/features">
                  Features
                </Link>
                <Link className="text-body-sm text-(--body) hover:text-(--ink)" to="/pricing">
                  Pricing
                </Link>
              </div>
            </div>

            <div>
              <div className="text-caption-mono text-(--mute) uppercase tracking-widest">
                Resources
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Link className="text-body-sm text-(--body) hover:text-(--ink)" to="/docs">
                  Docs
                </Link>
                <Link className="text-body-sm text-(--body) hover:text-(--ink)" to="/integration">
                  Integration
                </Link>
                <Link className="text-body-sm text-(--body) hover:text-(--ink)" to="/integration">
                  Getting Started
                </Link>
              </div>
            </div>

            <div>
              <div className="text-caption-mono text-(--mute) uppercase tracking-widest">
                Social
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {githubUrl ? (
                  <a
                    className="inline-flex items-center gap-2 text-body-sm text-(--body) hover:text-(--ink)"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InlineSvgIcon svg={assets.github_svg} />
                    <span>GitHub</span>
                  </a>
                ) : null}

                {linkedinUrl ? (
                  <a
                    className="inline-flex items-center gap-2 text-body-sm text-(--body) hover:text-(--ink)"
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InlineSvgIcon svg={assets.linkedin_svg} />
                    <span>LinkedIn</span>
                  </a>
                ) : null}

                {portfolioUrl ? (
                  <a
                    className="inline-flex items-center gap-2 text-body-sm text-(--body) hover:text-(--ink)"
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InlineSvgIcon svg={assets.portfolio_svg} />
                    <span>Portfolio</span>
                  </a>
                ) : null}

                {emailHref ? (
                  <a
                    className="inline-flex items-center gap-2 text-body-sm text-(--body) hover:text-(--ink)"
                    href={emailHref}
                  >
                    <InlineSvgIcon svg={assets.email_svg} />
                    <span>Email</span>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-(--hairline) pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-caption-mono text-(--mute)">
            Auth Service App — {year}
          </div>

          <div className="text-body-sm text-(--body)">
            Built and designed by{' '}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--link-blue) hover:underline"
            >
              Sumitr995
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
