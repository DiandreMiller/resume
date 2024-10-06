import React, {useState} from "react";
import court from '../Assets/cartoon-basketball-court-vector.jpg'
import basketball from '../Assets/basketball-removebg-preview.png'
import cloud from '../Assets/cloud1.png'
import BallLaunch from "./BallLaunch";



const PlayGameComponent = () => { 
    return (
        <div className="w-screen h-screen bg-cover bg-center transform -translate-x-28 p-0 overflow-x-hidden" style={{ backgroundImage: `url(${court})` }}>
            
           
            <img className='h-36 cloud z-10' style={{ transform: 'translateY(-380px)  rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud2 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud3 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud4 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud5 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />
            <img className='h-36 cloud6 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud" />

            <BallLaunch />

            <img className="h-9" style={{ transform: 'translateY(660px) translateX(800px)' }} src={basketball} alt="basketball" />
        </div>
    );
}

export default PlayGameComponent;