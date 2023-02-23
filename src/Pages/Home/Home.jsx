import React from 'react'
import Cards from './Components/Cards'
import Hero from './Components/Hero'
import SelecCoder from './Components/SelecCoder'
import './HomeStyle.css'

function Home() {
  return (
    <>
    <nav></nav>
    <main>
        <Hero/>
        <SelecCoder/>
        <Cards/>
    </main>
    </>
    
  )
}

export default Home
