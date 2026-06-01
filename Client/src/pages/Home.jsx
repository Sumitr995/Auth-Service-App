import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import IntegrateSection from '../components/Landing/IntegrateSection.jsx'
import HowItWorksSection from '../components/Landing/HowItWorksSection.jsx'

const Home = ({ Sign, setSign }) => {
  return (
    <div className="min-h-screen pt-24 bg-(--canvas-soft) selection:bg-(--link-blue) selection:text-white">
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
