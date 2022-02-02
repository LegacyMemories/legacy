import React from 'react';
import Container from 'react-bootstrap/Container';
import SiteNav from '../components/SiteNav';
import LogoNav from '../components/LogoNav';

function Home() {
  
    return (

      <Container fluid className="p-3">
          <LogoNav></LogoNav>
          <SiteNav></SiteNav>

          <Container className="image-container">
            <img
              alt=""
              src="./images/tree.png"
              width="350"
              height="350"
            />
          </Container>
          <Container>
            <p>This application allows a person to document their lifetime memories.  This application is a tool to help people and their families coping with dementia as a way to record and remember things.  They can construct a timeline, add photos, and add blog entries about their memories.</p>
          </Container>
      </Container>
    );
};



export default Home;