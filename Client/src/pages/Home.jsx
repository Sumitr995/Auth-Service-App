import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'

const Home = ({ Sign, setSign }) => {
  return (
    <div
      className='bg-[url("/Dark_BG.jpg")] h-screen bg-center bg-cover bg-no-repeat'>
      <div>
        <Navbar Sign={Sign} setSign={setSign} />
        <Header Sign={Sign} setSign={setSign} />
      </div>
    </div>
  )
}

export default Home
