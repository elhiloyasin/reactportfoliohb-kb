import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';


  function TopNavbar({aboutme, projects, contact, logo}) {
    return (
    <ReactBootStrap.Navbar collapseOnSelect expand="md" id="navbar-color" variant="dark">
    <ReactBootStrap.Container>
    <Link to='/' style={{ textDecoration: 'none' }}>
    <ReactBootStrap.Navbar.Brand href="#home" className='logo'>{logo}</ReactBootStrap.Navbar.Brand>
    </Link>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className='ms-auto'>
        <Link to='/aboutme' style={{ textDecoration: 'none' }}>
      <ReactBootStrap.Nav.Link href="#aboutme">{aboutme}</ReactBootStrap.Nav.Link>
      </Link>
      <Link to='/projects' style={{ textDecoration: 'none' }}>
       <ReactBootStrap.Nav.Link href="#projects" >{projects}</ReactBootStrap.Nav.Link>
       </Link>
       <Link to='/contact' style={{ textDecoration: 'none' }}>
       <ReactBootStrap.Nav.Link href="#contact">{contact}</ReactBootStrap.Nav.Link>
       </Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
    );
  }
  export default TopNavbar;