import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AtomCharacteristics from '../atom-characteristics/atom-characteristics';
import GenericDropdown from '../atom-dropdown/atom-dropdown';
import AtomStack from '../atom-stack/atom-stack';

function CompanyForm() {
  return (
    <>
      <section className='titleFormEmpresa'>
        <h1>Busca tu <span>coder</span><br /> para adoptar</h1>
      </section>
      <section className='dropdowns'>
        <div className='titleDrop1'>
          <h5>¿Qué tipo de coder buscas?</h5>
        </div>
        <GenericDropdown title='Elige uno' option1='Full Stack' option2='Front End' option3='Back End' />
        <div className='titleDrop2'>
          <h5>¿Qué experiencia debe tener?</h5>
        </div>
        <GenericDropdown title='Elige uno' option1='Junior' option2='Mid' option3='Senior' />
      </section>
      <section className='selectStack'>
        <div className='titleStack'>
          <h5>¿Qué stack necesitas?</h5>
        </div>
        <AtomStack/>
      </section>
      <section className='selectCharacteric'>
        <div>
          <h5>¿Qué otras carácteristicas?</h5>
        </div>
        <AtomCharacteristics/>
      </section> 
      <section className='searchCoder'>
        <Link to="/">
          <Button variant="primary" type="submit" className="submitButton">
          ¡Busca tu coder!
          </Button>
        </Link>
      
      </section>
    </>  
  )
}

export default CompanyForm
