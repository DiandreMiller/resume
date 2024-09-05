// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import AboutMe from '../Components/AboutMe';
import ContactMe from '../Components/ContactMe';
import Education from '../Components/Education';
import Experience from '../Components/Experience';
import Instructions from '../Components/Instructions';
import Projects from '../Components/Projects';
import SoftSkills from '../Components/SoftSkills';
import Volunteer from '../Components/Volunteer';



function App() {
  

  return (
    <>
      <div>
        <h1 className="text-5xl font-bold underline">Hello world!</h1>
        <AboutMe />
        <ContactMe />
        <Education />
        <Experience />
        <Instructions />
        <Projects />
        <SoftSkills />
      </div>
      
    </>
  )
}

export default App
