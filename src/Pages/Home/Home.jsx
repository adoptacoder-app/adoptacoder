import React from 'react'
import AtomNavbar from '../../Components/atom-navbar/AtomNavbar'
import Hero from './Components-home/Hero'
import Cards from './Components-home/Cards'
import './HomeStyle.css'

function Home() {
  return (
    <>
    <AtomNavbar/>
    <main>
        <Hero/>
        <Cards/>
    </main>
    </>
    
  )
}

export default Home
