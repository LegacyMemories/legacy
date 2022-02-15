import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function SiteNav()  {

  return (
    <Navbar bg="success" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand></Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">About</Nav.Link>
              <Nav.Link href="#FamilyTree">Family Tree</Nav.Link>
              <Nav.Link href="#TimeLine">Timeline</Nav.Link>
              <Nav.Link href="#Hobbies">Hobbies</Nav.Link>
              <Nav.Link href="#Blog">Blog</Nav.Link>
              <Nav.Link href="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteNav;