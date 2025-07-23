import React from 'react';
// import Nav from './components/Navbar/Nav';
import Navbar from './components/Navbar/Navber';
import Hero from './components/Hero/Hero';
import './App.css';
import Card from './components/Card/Card';

import Build from './components/Build a Brand/Build'
import Frequently from './components/Frequently/Frequently'
import GenzSoft from './components/GenzSoft/GenzSoft'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services';
import Abouts from './components/ABOUTS/About/About';


import { Outlet } from 'react-router-dom';




function App() {
  return (




    <div className="App">
      {/* <Nav></Nav> */}
      <Navbar />
      <Hero />
      <Card />
      <Services />
      <Build />
      <GenzSoft />
      <Frequently />
      <Footer />
      <Outlet /> 
    </div>






  );
}

export default App;
