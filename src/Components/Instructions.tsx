import React from "react";
import TypeWriter from "./Typewriter";

interface InstructionProps {
    directions: string [];
}

const Instructions: React.FC<InstructionProps> = ({ directions }) => {

    return (
        <div>
            {directions.map((direction, index) => (
                <h5 key={index}>
                    <TypeWriter text={direction} delay={100}/>
                </h5>
            ))}
        </div>
    )

}

export default Instructions

