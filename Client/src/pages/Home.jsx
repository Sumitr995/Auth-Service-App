import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Landing/Landing'
import Footer from '../components/Footer/Footer'
import IntegrateSection from '../components/Landing/IntegrateSection'
import HowItWorksSection from '../components/Landing/HowItWorksSection'

const Home = ({ Sign, setSign }) => {
  return (
    <div className="min-h-screen pt-16 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
      <Navbar Sign={Sign} setSign={setSign} />
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
