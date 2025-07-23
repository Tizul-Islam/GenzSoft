import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../ABOUTS/Navbar/Navber'
import Frequently from '../Frequently/Frequently'
import GenzSoft from '../GenzSoft/GenzSoft'
const Portfolio = () => {
    return (
        <div className='mt-28'>
          <Navbar/>
          <GenzSoft/>
          <Frequently/>
            <Footer/>
        </div>
    );
};

export default Portfolio;