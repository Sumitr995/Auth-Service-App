import React from 'react'
import { useNavigate } from 'react-router-dom'

const IntegrateSection = ({
  title = 'Integrate in minutes, scale for years.',
  description =
    'Our SDKs and APIs are built for developers who care about speed, security, and the user experience.',
  ctaLabel = 'Explore the SDKs',
  ctaTo = '/docs'
}) => {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden py-32 px-6 bg-(--ink) text-(--canvas)">

        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          {/* Decorative Shapes */}
          <div className="absolute top-[-20%] left-[-10%] w-72 h-72 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute top-[10%] left-[50%] w-96 h-96 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          <div className="absolute top-[50%] left-[80%] w-72 h-72 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-3000" />
        </div>
    
      <div className="relative z-10 mx-auto max-w-[1200px] text-center">
        <p className="text-body-sm tracking-wide uppercase text-(--canvas) opacity-80 mb-4">
          Developer-first platform
        </p>

        <h2 className="text-display-lg mb-8">{title}</h2>

        <p className="text-body-lg brightness-150 max-w-[720px] mx-auto mb-12">
          {description}
        </p>

        <button
          type="button"
          className="button-secondary px-8 bg-(--canvas) text-(--ink)"
          onClick={() => navigate(ctaTo)}
        >
          {ctaLabel}
        </button>
      </div>
    </section>
  )
}

export default IntegrateSection
