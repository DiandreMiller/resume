import React from "react";
import { useState } from "react";

import court from '../Assets/cartoon-basketball-court-vector.jpg'
import BallBounce from "./BallBounce";
import cloud from '../Assets/cloud1.png'
import banner from '../Assets/banner.png'
import Instructions from "./Instructions";
import TypeWriter from "./Typewriter";
import { v4 as uuidv4 } from 'uuid';

interface HomeProps {
    instructions: string[];
}

const BasketballCourt: React.FC<HomeProps> = ({ instructions }) => {
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
    const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
    const [isNameVisible, setIsNameVisible] = useState<boolean>(true);
    const [currentInstruction, setCurrentInstruction] = useState<string>(instructions[0]);
    const [visibleInstructions, setVisibleInstructions] = useState<string[]>([]);
    const [isInstructionButtonVisible, setIsInstructionButtonVisible] = useState<boolean>(false);
    const [instructionIndex, setInstructionIndex] = useState<number>(0);

    //Fix the instructions so that it doesn't repeat the same instruction over and over again

    const handleGetStarted = (): void => {
        setIsBannerVisible(false);
        setIsButtonVisible(false);
        setIsNameVisible(false);
        setVisibleInstructions([instructions[0]]); 
        setCurrentInstruction(instructions[0]);
        setIsInstructionButtonVisible(true); 
    }

    const handleContinue = (): void => {
        if (instructionIndex + 1 < instructions.length) {
            const nextIndex = instructionIndex + 1;
            setInstructionIndex(nextIndex);
            setCurrentInstruction(instructions[nextIndex]);
            setVisibleInstructions((prevInstructions) => [
                ...prevInstructions,
                instructions[nextIndex],
            ]); 
            setVisibleInstructions([instructions[nextIndex]]);
        } else {
            setIsInstructionButtonVisible(false);
        }
    }

    return (
        <div className="w-screen h-screen bg-cover bg-center transform -translate-x-28 p-0 overflow-x-hidden" style={{ backgroundImage: `url(${court})` }}>
            <BallBounce />
            {isBannerVisible && (
                <div className="flex justify-center">
                    <img className='z-20' src={banner} style={{ transform: 'translateY(-300px)', width: '600px' }} alt="banner" />
                </div>
            )}

            {visibleInstructions.length > 0 && (
                <div>
                    <h3>
                        {visibleInstructions.map((instruction) => (
                            <TypeWriter key={uuidv4()} instructions={instruction} />
                        ))}
                    </h3>
                </div>
            )}

            <img className='h-36 cloud z-10' style={{ transform: 'translateY(-380px)  rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud2 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud3 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud4 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud5 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud6 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />

            <div className="flex justify-center item-center" style={{ transform: 'translateY(-180px)' }}>
                {isNameVisible && (
                    <h2 className="rochester lg:text-9xl" style={{ color: 'rgb(255, 0, 0)' }}>Diandre Miller</h2>
                )}
            </div>

            {isButtonVisible && (
                <button className="button animate-bounce" onClick={handleGetStarted}> Click Here To Get Started!</button>
            )}

            {isInstructionButtonVisible && (
                <button className="button animate-bounce" onClick={handleContinue}> Continue</button>
            )}
        </div>
    );
}

export default BasketballCourt;
