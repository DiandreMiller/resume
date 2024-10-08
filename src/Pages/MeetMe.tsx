import React, { useState } from "react";
import { Link } from "react-router-dom";
import linkedInLogo from '../Assets/linkedInLogo.png'
import githubLogo from '../Assets/githubLogo.png'
import Diandre from '../Assets/DiandreFunnyPic.png'

import blueBasketball from '../Assets/blueBasketball.png'
import greenBasketball from '../Assets/greenBasketball.png'
import purpleBasketball from '../Assets/purpleBasketball.png'
import redBasketball from '../Assets/redBasketball.png'
import orangeBasketball from '../Assets/orangeBasketball.png'
import yellowBasketball from '../Assets/yellowBasketball.png'

// basketball to be used on hover: https://ozerty-usa.com/products/color-fun-silent-basketball?variant=48436702216485

const MeetMe = () => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center dark:bg-gray-700">
      <h1 className="mb-4 pb-4 p-4 text-center text-3xl font-bold dark:text-white">
        {" "}
        Diandre Miller
      </h1>
      <div className="flex flex-col items-center justify-center py-10">
        {/* Central Image */}
        <div className="relative">
          <img
            src={Diandre}
            alt="Profile"
            className="w-44 h-44 rounded-full transition transform hover:scale-110 animate-flyInUp"
          />
        </div>
      </div>
      {showAll && (
        <div className="flex flex-col items-center justify-center max-w-lg">
          <div className="bg-purple-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInRight">
            <p className="text-black text-center">
              <strong>Hobbies</strong>
              <br />
              Basketball, Listening to Music
            </p>
          </div>
          <div className="bg-yellow-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
            <p className="text-black text-center">
              <strong>Passion</strong>
              <br />
              Coaching
            </p>
          </div>

          <div className="bg-pink-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInRight">
            <p className="text-black text-center">
              <strong>Education</strong>
              <br />
              Journalism & Software Development
            </p>
          </div>
          <div className="bg-green-300 w-44 h-44 rounded-full m-2 p-4 flex items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
            <p className="text-black text-center">
              <strong>Ask me about</strong>
              <br />
              Anything You Want
            </p>
          </div>
          <div className="bg-orange-300 w-44 h-44 rounded-full m-2 p-4 flex flex-col items-center justify-center transition transform hover:scale-110 animate-flyInRight">
            <Link
              to="https://github.com/DiandreMiller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-center mb-3"
            >
              <strong>GitHub</strong>
            </Link>
            <Link to="https://github.com/DiandreMiller" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" width={30} />
            </Link>
          </div>
          <div className="bg-blue-300 w-44 h-44 rounded-full m-2 p-4 flex flex-col items-center justify-center transition transform hover:scale-110 animate-flyInLeft">
            <Link
              to="https://www.linkedin.com/in/diandre-miller/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-center mb-3"
            >
              <strong>LinkedIn</strong>
            </Link>
            <Link to="https://www.linkedin.com/in/diandre-miller/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="LinkedIn" width={35} />
            </Link>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          className="mt-4 p-2 text-indigo-600 hover:underline mb-4 lg:mb-8 text-xl font-extrabold tracking-wide leading-tight text-center dark:text-white md:text-2xl rounded-md"
          onClick={handleToggle}
        >
          {showAll ? "Show Less" : "Explore More"}
        </button>
      </div>
    </div>
  );
};

export default MeetMe;
