import React from "react";
import scoreboard3 from '../Assets/scoreboard3.jpeg'
import BallBounce from "./BallBounce";
import BasketballCourt from "./BasketballCourt";

interface HomeProps {
    instructions: string[];
}

const HomeComponent: React.FC<HomeProps> = ({instructions}) => {

    return (
        <div>
            <BasketballCourt instructions={instructions}/>
        </div>

    )
}

export default HomeComponent;