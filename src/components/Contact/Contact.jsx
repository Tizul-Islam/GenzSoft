import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../ABOUTS/Navbar/Navber';
import About01 from '../ABOUTS/About01/About01'
import About02 from '../ABOUTS/About02/About02'
import Emailjs from './Emailjs/Emailjs'
const Contact = () => {
    return (
        <div className='mt-28'>
            
          <Navbar/>
          <About01/>
          <About02 />
          <Emailjs/>
          <Footer/>
           
        </div>
    );
};

export default Contact;