import React from 'react';
import Abouts from './Abouts';// make sure the path is correct
import screenshot from './image/Screenshot.png'
import About01 from '../About01/About01'
import About02 from '../About02/About02'
import Navbar from '../Navbar/Navber'
import Footer from '../Footer/Footer';
import OutSection from '../OurSection/OutSection';
import Teams from '../Team/Teams';
const About = () => {
  const About = [
    {
      "id": 1,
      "title": "Title name",
      "description": "Founder & Chief Executive Officer (CEO)",
      "image": screenshot
    },
    {
      "id": 2,
      "title": "Title name",
      "description": "Chief Operating Officer (COO)",
      "image": screenshot
    },
    {
      "id": 3,
      "title": "Title name",
      "description": "Project Manager",
      "image": screenshot
    },
    {
      "id": 4,
      "title": "Title name",
      "description": "Full Stack Developer",
      "image": screenshot
    },
    {
      "id": 5,
      "title": "Title name",
      "description": "Digital Marketer",
      "image": screenshot
    },
    {
      "id": 6,
      "title": "Title name",
      "description": "Graphic Designer",
      "image": screenshot
    },
 
  ];

  return (
    

<div className="mt-26">
<Navbar/>
<OutSection/>
<div className="services-section">
      <h2 className="text-4xl font-bold font-size: 2.5rem; text-center p-8 colo text-[#63b309]">Meet Our Team</h2>
      {/* <Abouts data={About} /> */}
      
<Teams/>

     <About01/>
     <About02/>
     <Footer/>
    </div>

</div>

  
    
  );
};

export default About;










//corrected code Start





//corrected code start
// import React from 'react';
// import './About.css';
// import logo from './img/growtika-9WnjxT1NCoY-unsplash.jpg'; // Replace with your image

// const MissionVision = () => {
//   return (
//     <div className="mission-vision-container">
//       <div className="content-wrapper">
//         <div className="text-content">
//           <div className="mission-section">
//             <h2 className="section-title">Our Mission</h2>
//             <p className="section-text">
//               To empower businesses by delivering cutting-edge digital solutions that foster growth, innovation, and success. At Marnurjor IT, we help you Learn, Work, and Succeed through technology.
//             </p>
//           </div>

//           <div className="vision-section">
//             <h2 className="section-title">Our Vision</h2>
//             <p className="section-text">
//               To be a global leader in software and web development, setting new standards for quality and innovation while building lasting relationships with our clients.
//             </p>
//           </div>

//           <div className="journey-section">
//             <h2 className="section-title">Our Journey</h2>
//             <p className="section-text">
//               Since our inception, Marnurjor IT has evolved into a trusted partner for businesses worldwide. Our skilled professionals have successfully delivered hundreds of projects, ranging from e-commerce websites to enterprise-grade software solutions.
//             </p>
//           </div>
//         </div>

//         <div className="image-container">
//           <img 
//             src={logo} 
//             alt="Marnurjor IT Mission and Vision" 
//             className="mission-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MissionVision;