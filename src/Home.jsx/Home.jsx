import React from 'react';
import About from '../components/ABOUTS/About/About';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/ABOUTS/Navbar/Navber';
import Footer from '../components/Footer/Footer';
const Home = () => {
    return (
        <div>
<h2>hello tizul fuck u</h2>
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Home;