import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Header from './components/header/Header.js';
import LandingPage from "./components/main/Home.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Container className="App" fluid>
        <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  );
}

export default App;