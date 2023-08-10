import Hero from './components/Hero';
import Education from './components/Education';
import Aboutme from './components/Aboutme';
import Artwork from './components/Artworks';
import Contactme from './components/Contactme';
import Projects from './components/Projects'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Footer from './components/Footer';
import { useEffect } from 'react';

// import * as React from "react";
// import { createRoot } from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hero/>,
//   },
//   {
//     path: "/aboutme",
//     element: <Aboutme/>,
//   },
//   {
//     path: "/education",
//     element: <Education/>,
//   },
//   {
//     path: "/artworks",
//     element: <Artwork/>,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
 
// );


function App() {
  useEffect(()=>{
    Aos.init()
  }, [])
  return (

    <div className="App scroll-smooth"> 
      <div  id="Home" data-aos='fade-down' data-aos-easing="linear" data-aos-duration="1000">
        <Hero  />
      </div>
    
      <div  id= 'Education' data-aos="fade-up-right" data-aos-easing="linear" data-aos-duration="1000">
        <Education />
      </div>

      <div id= 'ContactMe' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
      <Contactme />
     </div>
      
      <div className='bg-gradient-to-t from-indigo-200  '>
   
        <div id="Aboutme" data-aos="zoom-in-up" data-aos-duration="1000">
        <Aboutme />
        </div >

        <div id="Projects" data-aos='fade-down' data-aos-easing="linear" data-aos-duration="1000">
          <Projects />
        </div>
        
        <div id="Artworks" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-sine">
        <Artwork />
        </div>
      </div>  
     
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
