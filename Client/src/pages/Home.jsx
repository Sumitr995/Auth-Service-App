import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Landing/Landing'
import Footer from '../components/Footer/Footer'
import IntegrateSection from '../components/Landing/IntegrateSection'
import HowItWorksSection from '../components/Landing/HowItWorksSection'

const Home = ({ Sign, setSign }) => {
  return (
    <div className="min-h-screen pt-24 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
      <div className="fixed top-0 left-0 right-0 z-60 w-full border-b border-(--hairline) bg-(--canvas-soft)/90 backdrop-blur-md">
        <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-center px-6 text-xs text-(--body)">
          <span className="font-medium text-(--ink)">Notice:</span>
          <span className="ml-2">This website is under reconstruction.</span> 
          <span className="ml-2">For Reference use old website: </span>
          <a href="https://auth-app-sumitr995.netlify.app/" target="_blank" rel="noopener noreferrer" className="ml-1 font-medium text-(--link-blue) hover:underline">
            view
          </a>
        </div>
      </div>

      <Navbar Sign={Sign} setSign={setSign} topOffset={32} />
      <main>
        <Header Sign={Sign} setSign={setSign} />

        <HowItWorksSection />

        <IntegrateSection />
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

export default Home
