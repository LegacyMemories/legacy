import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Nav from "./components/Nav";
import Header from './components/Header.js';
import LandingPage from './components/LandingPage.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      {/*<Nav />*/}
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
