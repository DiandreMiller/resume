import React from "react";
import court from '../Assets/cartoon-basketball-court-vector.jpg'
import BallBounce from "./BallBounce";

const BasketballCourt = () => {

    return (
        <div className="w-screen h-screen bg-cover bg-center transform -translate-x-28 p-0 overflow-x-hidden" style={{ backgroundImage: `url(${court})`}}>
            <BallBounce />
            
        </div>

    )
}

export default BasketballCourt;