import React from "react";
import { useState } from "react";

import court from '../Assets/cartoon-basketball-court-vector.jpg'
import BallBounce from "./BallBounce";
import cloud from '../Assets/cloud1.png'
import banner from '../Assets/banner.png'


const BasketballCourt = () => {

    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(true);
    const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);
    const [isNameVisible, setIsNameVisible] = useState<boolean>(true);

    const handleGetStarted = (): void => {
        setIsBannerVisible(false);
        setIsButtonVisible(false);
        setIsNameVisible(false);
    }

    return (
        <div className="w-screen h-screen bg-cover bg-center transform -translate-x-28 p-0 overflow-x-hidden" style={{ backgroundImage: `url(${court})`}}>
            <BallBounce />
            {isBannerVisible && (
                <div className="flex justify-center">
                    <img className='z-20' src={banner} style={{ transform: 'translateY(-300px)', width: '600px'}} alt="banner" />
                </div>
            )}

            <img className='h-36 cloud z-10' style={{ transform: 'translateY(-380px)  rotate(10deg)' }} src={cloud} alt="cloud"/>
            <img className='h-36 cloud2 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud"/>
            <img className='h-36 cloud3 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud"/>
            <img className='h-36 cloud4 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud"/>
            <img className='h-36 cloud5 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud"/>
            <img className='h-36 cloud6 z-10' style={{ transform: 'translateY(-380px) rotate(10deg)' }} src={cloud} alt="cloud"/>
            <div className="flex justify-center item-center" style={{ transform: 'translateY(-180px)'}}>
                {isNameVisible && (
                    <h2 className="rochester lg:text-9xl" style={{color: 'rgb(255, 0, 0)'}}>Diandre Miller</h2>
                )}
            </div>

            {isButtonVisible && (
                <button className="button animate-bounce" onClick={handleGetStarted}> Click Here To Get Started!</button>
            )}
            
        </div>

    )
}

export default BasketballCourt;