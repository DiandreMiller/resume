import React from "react";
import court from '../Assets/cartoon-basketball-court-vector.jpg'
import BallBounce from "./BallBounce";
import cloud from '../Assets/cloud1.png'

const BasketballCourt = () => {

    return (
        <div className="w-screen h-screen bg-cover bg-center transform -translate-x-28 p-0 overflow-x-hidden" style={{ backgroundImage: `url(${court})`}}>
            <BallBounce />
            <img className='h-36 cloud' style={{ transform: 'translateY(-380px) translateX(1430px) rotate(10deg)' }} src={cloud} alt="cloud"/>
            {/* <img className='h-36 cloud' style={{ transform: 'translateY(-380px) translateX(1130px) rotate(10deg)' }} src={cloud} alt="cloud"/> */}
            
        </div>

    )
}

export default BasketballCourt;