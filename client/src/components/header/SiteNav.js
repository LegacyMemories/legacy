import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import API from '../../utils/API';

function SiteNav()  {

  const [photo, setPhoto] = useState();
  const [username, setUsername] = useState();
  useEffect(() => {
    getProfileInfo();
  }, [])

      // function to get security question/answer for user account
      function getProfileInfo() {
        var profileObj = {
          id: "621d5057347d5482afe493a2"
        }
        console.log(profileObj.id);
        // api call to retrieve the security question/answer for user account based upon email
        API.getProfileInfo(profileObj.id)
          .then(res => {
            // check if successful retrieval
            if(res.status ===200) { 
              // set state to values returned
              console.log(res.data);
              setPhoto(res.data.profilePhoto);
              setUsername(res.data.firstName);
            }
          })
          .catch(err => console.log(err));
        }

  return (
    <Navbar bg="success" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand>
          <img src={photo} style = {{height: "40px", width: "40px"}}></img>
          <div>{username}</div>
        </Navbar.Brand>
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
              <Nav.Link href="/editprofile">Edit Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default SiteNav;