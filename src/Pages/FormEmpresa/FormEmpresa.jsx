import React from 'react'
import AtomNavbar from '../../Components/atom-navbar/AtomNavbar';
import '../../Components/atom-companyForm/CompanyForm.css'
import './FormEmpresa.css'
import CompanyForm from '../../Components/atom-companyForm/CompanyForm';

function FormEmpresa() {
  return (
    <>
    <AtomNavbar/>
    <main>
      <CompanyForm/>
    </main>
    </>
    
  )
}

export default FormEmpresa
