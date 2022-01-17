import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  
  return (
    <footer>
        <Container>
            <Row>
                <Col>
                    <div>Copyright ©2022</div>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;