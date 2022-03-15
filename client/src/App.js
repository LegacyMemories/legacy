import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.js';
import LandingPage from "./components/main/LandingPage.js";
import Footer from "./components/footer/Footer.js";
import Profile from "./components/main/Profile.js";
import EditProfile from "./components/main/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Container className="App" fluid>
        <Header/>
        <Routes>
          <Route path="/landingPage" element={ <LandingPage/> } />
          <Route path="/profile" element={ <Profile/> } />
          <Route path="editprofile" element={ <EditProfile/> } />
          <Route path="/" element={<LandingPage/>} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;