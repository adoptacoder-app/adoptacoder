import React from 'react'
import AtomNavbar from '../../Components/atom-navbar/AtomNavbar'
import Cards from './Components/Cards'
import Hero from './Components/Hero'
import SelecCoder from './Components/SelecCoder'
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
