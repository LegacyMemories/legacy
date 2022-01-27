import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function LogoNav()  {

    const [showLogin, toggleShowLogin] = useState(true);

    return (

        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="#home">
                  <div className="form-wrapper">
                    <img
                      alt=""
                      src="./images/tree.png"
                      width="50"
                      height="50"
                      className="d-inline-block align-top"
                    />{' '}
                    <h1 className="header legacyTitle">Legacy</h1>
                  </div>
                </Navbar.Brand>
                <Nav  className="justify-content-end">
                    {showLogin ? (
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link onClick={() => toggleShowLogin(false)} href="#LoginCreateAcc">Login/Create Account</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    ) : (
                        <div>
                            <Button variant="success" onClick={() => toggleShowLogin(true)}>Logged In</Button>
                        </div>
                    )}
               </Nav>
            </Container>
      </Navbar>
    )
}

export default LogoNav;