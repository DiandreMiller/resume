import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Navbar from "./Commons/Navbar";
import MeetMe from "./Pages/MeetMe";
import Feedback from "./Pages/Feedback";
import SignIn from "./Pages/SignIn";
import CreateAnAccount from "./Pages/CreateAnAccount";
import FrequentlyAskedQuestions from "./Pages/FrequentlyAskedQuestions";
import MyProjects from "./Pages/MyProjects";
import BuildYourOwnResume from "./Pages/BuildYourOwnResume";
import PlayGame from "./Pages/PlayGame";

import PacmanLoader from "react-spinners/PacmanLoader";

//TODO: See if there are any videos on youtube on building a basketball game.
//Fix transition in between pages.

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [inspirationalMessage, setInspirationalMessage] = useState<React.ReactNode>(<InspirationalMessage />);
  const [score, setScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  //TODO: Make the score update on the scoreboard.
  //If xPosition === 1150, and yPosition gets to 305, then hits 320, then 330, user scores, 
  //else computer scores.



  //TODO: Make the transition between the home page and the loading phase more smooth. 
  const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">
          {inspirationalMessage}
          <PacmanLoader
            color="#F48772"
            cssOverride={{}}
            loading
            margin={0}
            size={50}
            speedMultiplier={1}
          />
        </div>
      );
    }
    return <>{children}</>;
  };

  const instructionsArray: string[] = [
    `Welcome To My Story`,
    `Hello, my name is Diandre Miller. Thank you for taking time to get to know me.`,
    `I would love for you to get to know me, and I would love to know more about you.`, 
    `But there's a catch.`,
    `In order to get to know me, you have to play a game.`,
    `You will shoot a basketball in a hoop. If you make the shot, you will get a point; if you miss, the computer scores.`, 
    `If you don't score before the clock runs out, the computer gets a point.`,
    `You have one job`,
    `BEAT THE COMPUTER!`,
    '...',
    'In order to shoot the basketball, click on the screen and drag to aim the basketball.', 
    `When you are ready to shoot, release the mouse or touch pad.`,
    `Tutorial Here:`
  ];


  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LoadingWrapper><Home instructions={instructionsArray} /></LoadingWrapper>} />
            <Route path='/play-game' element={<LoadingWrapper><PlayGame /></LoadingWrapper>} />
            <Route path='/meet-me' element={<LoadingWrapper><MeetMe /></LoadingWrapper>} />
            <Route path='/feedback' element={<LoadingWrapper><Feedback /></LoadingWrapper>} />
            <Route path='/sign-in' element={<LoadingWrapper><SignIn /></LoadingWrapper>} />
            <Route path='/create-an-account' element={<LoadingWrapper><CreateAnAccount /></LoadingWrapper>} />
            <Route path='/faq' element={<LoadingWrapper><FrequentlyAskedQuestions /></LoadingWrapper>} />
            <Route path='/build-your-own-resume' element={<LoadingWrapper><BuildYourOwnResume /></LoadingWrapper>} />
            <Route path='/my-projects' element={<LoadingWrapper><MyProjects /></LoadingWrapper>} />
            <Route path='*' element={<FourOFour />} />
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