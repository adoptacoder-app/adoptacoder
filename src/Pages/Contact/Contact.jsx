import React from 'react'
import AtomNavbar from '../../Components/atom-navbar/AtomNavbar'
import Card from '../../Components/atom-card/atom-card'
import './ContactStyle.css'

function Contact() {
  return (
    <>
    <header>
     <AtomNavbar/>
     <h1>¿Quieres Hablar conmigo? </h1>
    </header>
    <main>

    <Card/>
    </main>
    </>
    
  )
}

export default Contact
