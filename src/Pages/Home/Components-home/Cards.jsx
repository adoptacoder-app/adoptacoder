import React from 'react'
import CodersList from '../../../Components/mol-codersList/mol-codersList'

function Cards() {
  return (
      <section className='cards'>
          <div>
              <h3>Coder Destacados</h3>
          </div>
          <CodersList/>
          <div className='hidden'>
          </div>
      </section>
  )
}

export default Cards
