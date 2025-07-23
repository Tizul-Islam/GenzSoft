import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Abouts from './components/ABOUTS/About/Abouts'
import About from './components/ABOUTS/About/About'
import Footer from './components/ABOUTS/Footer/Footer'
import Navbar from './components/ABOUTS/Navbar/Navber'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Services from './components/ServicesOur/ServicesOur'
import Details from './components/Details/Details'
import App from './App'
// import Navbar from './components/ABOUTS/Navbar/Navber'
// import Home from './Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
  }, 
  
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/portfolio",
    element: <Portfolio />,


  },
  {
    path: "/contact",
    element: <Contact />,


  },  {
    path: "/services",
    element: <Services />,


  },
  {
    path: "/details",
    element: <Details />,


  }


    
]

   
    
  




  

  
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
