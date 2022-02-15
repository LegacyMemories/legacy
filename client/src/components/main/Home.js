import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function LandingPage() {
  return (
    <Container fluid className="p-3">
      <Col className="image-container">
        <Row>
          <img
            alt=""
            src="./media/tree.png"
            width="350"
            height="350"
          />
        </Row>
      </Col>
      <Col>
        <Row>
          <p>This application allows a person to document their lifetime memories.  This application is a tool to help people and their families coping with dementia as a way to record and remember things.  They can construct a timeline, add photos, and add blog entries about their memories.</p>
        </Row>
      </Col>
    </Container>
  );
};



export default LandingPage;