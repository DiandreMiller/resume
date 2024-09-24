import React from "react";
import HomeComponent from "../Components/HomeComponent";

interface HomeProps {
    instructions: string[];
}

const Home: React.FC<HomeProps> = ({instructions}) => {

    return (
        <div>
            <HomeComponent instructions={instructions} />
        </div>

    )
}

export default Home;