import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
// import Dark_BG from '../assets/assets'

const Home = () => {
  return (
    <div className='bg-[url("https://img.freepik.com/free-vector/grey-hexagons-black-background_78370-2098.jpg?t=st=1764520835~exp=1764524435~hmac=1eb5cf83b58afa46ea5198423a50ab1e191c9af1b3f9dea51c7a12ad6240332e&w=2000")] h-screen'>
      <h1>
        <Navbar/>
        <Header/>
      </h1>
    </div>
  )
}

export default Home
