// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Hobbies from "./Components/Hobbies";
import InspirationalMessage from "./Components/InspirationalMessage";
import Instructions from './Components/Instructions';
import Projects from './Components/Projects';
import Scoreboard from './Components/Scoreboard';
import SoftSkills from './Components/SoftSkills';
import Volunteer from './Components/Volunteer';
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";




function App() {

  const instructionsArray: string[] = [
    `Welcome To My Story`,
    `Hello everyone, my name is Diandre Miller. Thank you for taking time to get to know me. I would love for you to get to know me, and I would love to know more about you. But there's a catch.`,
    `In order to get to know me, you have to play a game.`,
    `You will shoot a basketball in a hoop. If you make the shot, you will get a point; if you miss, the computer scores; if you don't score before the clock runs out, the computer gets a point.`,
    `BEAT THE COMPUTER!`,
  ];
  
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<FourOFour />} path='*' />
          </Routes>
        </BrowserRouter>

        
        
      </div>
      
    </>
  )
}

export default App

{/* <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello world!</h1> */}
        {/* <AboutMe /> */}
        {/* <ContactMe /> */}
        {/* <Education /> */}
        {/* <Experience /> */}
        {/* <Instructions directions={instructionsArray} /> */}
        {/* <Projects /> */}
        {/* <InspirationalMessage /> */}
        {/* <Scoreboard /> */}
        {/* <Hobbies /> */}
        {/* <SoftSkills /> */}
        {/* <Volunteer /> */}