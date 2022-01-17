import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

function HeaderNav() {
  
  return (
    <Row>
        <Col>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <div>|</div>
                <Nav.Item>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav.Item>
                <div>|</div>
                <Nav.Item>
                    <Nav.Link href="#">Family Tree</Nav.Link>
                </Nav.Item>
                <div>|</div>
                <Nav.Item>
                    <Nav.Link href="#">Timeline</Nav.Link>
                </Nav.Item>
                <div>|</div>
                <Nav.Item>
                    <Nav.Link href="#">Hobbies</Nav.Link>
                </Nav.Item>
            </Nav>
        </Col>
    </Row>
  );
}

export default HeaderNav;