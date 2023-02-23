import React from 'react'
import GenericDropdown from '../atom-dropdown/atom-dropdown';

function FormEmpresa() {
  return (
    <>
     <section className='titleFormEmpresa'>
      <h1>Busca tu <span>coder</span><br/> para adoptar</h1>
     </section>
     <section>
      <h3>¿Qué tipo de coder buscas?</h3>
      <GenericDropdown title='Elige uno' option1='Full Stack' option2='Front End' option3='Back End'/>
      <h3>¿Qué experiencia debe tener?</h3>
      <GenericDropdown title='Elige uno' option1='Junior' option2='Mid' option3='Senior'/>
     </section>
     <section>

     </section>
     <section>
      </section> 
    </>
  )
}

export default FormEmpresa
