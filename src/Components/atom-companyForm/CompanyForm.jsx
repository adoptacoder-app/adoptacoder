import React from 'react'
import GenericDropdown from '../atom-dropdown/atom-dropdown';

function CompanyForm() {
  return (
    <>
      <section className='titleFormEmpresa'>
        <h1>Busca tu <span>coder</span><br /> para adoptar</h1>
      </section>
      <section className='dropdowns'>
        <div className='titleDrop1'>
          <h3>¿Qué tipo de coder buscas?</h3>
        </div>
        <GenericDropdown title='Elige uno' option1='Full Stack' option2='Front End' option3='Back End' />
        <div className='titleDrop2'>
          <h3>¿Qué experiencia debe tener?</h3>
        </div>
        <GenericDropdown title='Elige uno' option1='Junior' option2='Mid' option3='Senior' />
      </section>
      <section className=''>

      </section>
      <section className=''>
      </section> 
    </>  
  )
}

export default CompanyForm
