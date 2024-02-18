import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import "../styles/GuestNavbar.css";
import Logo from "../assets/logo.svg"

export const GuestNavbar = () => (
  <Navbar expand="lg">
    <Navbar.Brand as={Link} to="/">
      <img src={Logo} alt="Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
