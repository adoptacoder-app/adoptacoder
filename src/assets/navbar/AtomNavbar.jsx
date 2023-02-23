import React from "react";
import "./navbar.css";
import { Nav, Navbar,} from "react-bootstrap";
//import { ReactComponent as Logo } from "./logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";

export default function AtomNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbarStyles" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">Perfil</Nav.Link>
          <Nav.Link href="#deets">Mensajes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <span className="logo">[adopt/a/coder]</span>
    </Navbar>
  );
}