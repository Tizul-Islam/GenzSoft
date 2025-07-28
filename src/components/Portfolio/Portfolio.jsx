import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../ABOUTS/Navbar/Navber'
import Frequently from '../Frequently/Frequently'
import GenzSoft from '../GenzSoft/GenzSoft'
import ContainCard from './Contain/Containcard'
import StorySection from './StorySection/StorySection'
const Portfolio = () => {
    return (
        <div className='mt-28'>
          <Navbar/>
          {/* <GenzSoft/>
          <Frequently/> */}
          <ContainCard />
          <StorySection />
            <Footer/>
        </div>
    );
};

export default Portfolio;