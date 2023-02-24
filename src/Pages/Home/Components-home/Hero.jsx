import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
      <section className='hero'>
          <div className='title'>
              <h1>Encuentra <br /> <span>coders</span> <br />para tu proyecto</h1>
          </div>
          <div className='caption'>
            <Link to='/formEmpresa'>
                <button className='buttonAdopta'> ¡Adopta! {'>>'} </button>
            </Link>
              <div className='captionDiv'>
                <Link to='/formUser'>
                  <h6 className='captionSpam1'>¡Eres coder?</h6>
                </Link>
                <Link to='/formUser'>
                  <h6 className='captionSpam1'>¡Hazte adoptar! {'>>'} </h6>
                </Link>
              </div>
          </div>
      </section>
  )
}

export default Hero
