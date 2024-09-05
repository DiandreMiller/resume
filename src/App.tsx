// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AboutMe from './Components/AboutMe';
import ContactMe from './Components/ContactMe';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Hobbies from "./Components/Hobbies";
import Instructions from './Components/Instructions';
import Projects from './Components/Projects';
import Scoreboard from './Components/Scoreboard';
import SoftSkills from './Components/SoftSkills';
import Volunteer from './Components/Volunteer';




function App() {
  

  return (
    <>
      <div>
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Hello world!</h1>
        {/* <AboutMe /> */}
        {/* <ContactMe /> */}
        {/* <Education /> */}
        {/* <Experience /> */}
        {/* <Instructions /> */}
        {/* <Projects /> */}
        <Scoreboard />
        <Hobbies />
        {/* <SoftSkills /> */}
        {/* <Volunteer /> */}
      </div>
      
    </>
  )
}

export default App
