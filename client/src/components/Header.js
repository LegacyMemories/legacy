import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import HeaderNav from './headerNav.js';

function Header() {
  
  return (
    <header>
        <Container>
            <Row>
                <Col>
                    <img src="./../media/legacyLogo.png" className="headerLogo" alt="Legacy Logo"/>
                </Col>
                <Col lg="10">
                    <h2 className="headingFont headingLogo">Legacy</h2>
                </Col>
                <Col>
                    <Button>Login</Button>
                </Col>
            </Row>
            <HeaderNav/>
        </Container>
    </header>
  );
}

export default Header;