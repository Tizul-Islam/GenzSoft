import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../ABOUTS/Navbar/Navber'
import Frequently from '../Frequently/Frequently'
import Services from './Services/Services'
const ServicesOur = () => {
    return (
        <div className='mt-30'>
            <Navbar/>
            <Services/>
            <Frequently/>
            <Footer/>
        </div>
    );
};

export default ServicesOur;