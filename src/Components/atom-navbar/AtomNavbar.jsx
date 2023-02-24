import React from "react";
import "./atomNavbar.css";
import { Nav, Navbar,} from "react-bootstrap";
import { Icon } from '@iconify/react';




import "./atomNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function AtomNavbar() {
  return (
 
    <Navbar collapseOnSelect expand="lg" className="navbarStyles" sticky="top">
      <Link to='/'>
        <p className="logo">
          <span className="logoBrackets">[</span>
          <span className="logoAdopta">adopt/a/</span>
          <span className="logoCoder">coder</span>
          <span className="logoBrackets">]</span>
        </p>
      </Link> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <Icon icon="circum:menu-burger" color="#e8f3fc" width="30" className="burgerIcon" />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav"  >
        <Nav className="mr-auto">
          <Nav.Link href="/" className="navLink">Home</Nav.Link>
          <Nav.Link href="#" className="navLink">Perfil</Nav.Link>
          <Nav.Link href="#" className="navLink">Mensajes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}