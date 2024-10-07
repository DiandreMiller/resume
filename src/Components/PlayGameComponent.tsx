import React, {useState} from "react";
import court from '../Assets/cartoon-basketball-court-vector.jpg'
import net from '../Assets/net.png'
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

            <img className="h-14 z-11" style={{ position: 'absolute', top: '350px', left: '1145px' }} src={net} alt="net" />
            <img className="h-14 z-11" style={{ position: 'absolute', top: '350px', right: '1145px' }} src={net} alt="net" />

            <BallLaunch />

            

            {/* <img className="h-9" style={{ transform: 'translateY(660px) translateX(800px)' }} src={basketball} alt="basketball" /> */}
        </div>
    );
}

export default PlayGameComponent;