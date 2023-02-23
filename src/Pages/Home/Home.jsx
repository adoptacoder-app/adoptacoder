import React from 'react'
import AtomNavbar from '../../Components/atom-navbar/AtomNavbar'
import Cards from '../../Components/Components-home/Cards'
import Hero from '../../Components/Components-home/Hero'
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
