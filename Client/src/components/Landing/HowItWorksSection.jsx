import React from 'react'
import { Globe, KeyRound, Shield, User } from 'lucide-react'

const DEFAULT_STEPS = [
  {
    title: 'Account',
    description: 'Create your organization and define your project scope.',
    Icon: User
  },
  {
    title: 'API Key',
    description: 'Generate a secure environment key for your backend services.',
    Icon: KeyRound
  },
  {
    title: 'Integrate',
    description: 'Install our SDK and call our simplified auth endpoints.',
    Icon: Globe
  },
  {
    title: 'Manage',
    description: 'Monitor login attempts and manage users from the vault.',
    Icon: Shield
  }
]

const HowItWorksSection = ({
  title = 'How it Works',
  subtitle = 'Get from zero to production-ready authentication in four simple steps.',
  steps = DEFAULT_STEPS
}) => {
  return (
    <section className="section-invert relative overflow-hidden py-32 px-6">
      {/* Smooth connector from Header into this section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-28 bg-linear-to-b from-(--canvas-soft) to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-56 w-[min(1000px,100%)] -translate-x-1/2 rounded-full bg-(--canvas-soft) opacity-25 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-display-lg">{title}</h2>
          <p className="mt-4 text-body-sm text-(--section-fg) opacity-80 max-w-[720px] mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative mt-18">
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 top-8 z-0 h-px bg-(--section-fg) opacity-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {steps.map(({ title: stepTitle, description, Icon }, index) => (
              <div key={stepTitle ?? index} className="relative text-center">
                <div className="mx-auto w-fit">
                  <div className="relative z-10 h-16 w-16 rounded-2xl bg-(--section-bg)">
                    <div className="absolute inset-0 rounded-2xl bg-(--section-fg) opacity-10" />
                    <div className="absolute inset-0 rounded-2xl border border-(--section-fg) opacity-15" />
                    <div className="relative h-full w-full grid place-items-center">
                      <Icon className="h-6 w-6 text-(--section-fg)" strokeWidth={1.8} />
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-display-sm">{stepTitle}</h3>
                <p className="mt-3 text-body-sm text-(--section-fg) opacity-80 max-w-[260px] mx-auto">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
