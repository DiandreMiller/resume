import React from "react";
import basketball from '../Assets/basketball-removebg-preview.png'
import { useState, useEffect } from "react";

const BallBounce = () => {

    const [yPosition, setYPosition] = useState<number>(0);
    const [xPosition, setXPostion] = useState<number>(0);
    const [rotation, setRotation] = useState<number>(0);
    const [velocityX, setVelocityX] = useState<number>(2);
    const [velocityY, setVelocityY] = useState<number>(2);

    const gravity: number = 0.98;
    const friction: number = 0.99;
    const bounce: number = -0.8;
    const floorY: number = 720;

    useEffect(() => {
        const interval = setInterval(() => {
            setYPosition(previousY => {
                let newY: number = previousY + velocityY;
                if(newY >= floorY) {
                    newY = floorY;
                    setVelocityY(velocityY * bounce);
                } else {
                    setVelocityY(velocityY + gravity);
                }
                return newY;
            })

            setXPostion((previousX) => {
                const newX: number = previousX + velocityX;
                setVelocityX(velocityX * friction);
                return newX;
            });

            setRotation((previousRotation) => previousRotation + velocityX * 5);
        }, 50);

        return () => clearInterval(interval);
    }, [velocityX, velocityY, bounce])


    return (

        <div>
            <section className="h-96 w-96 flex" >
                <img className="h-9" style={{ transform: `translate(${xPosition}px, ${yPosition}px) rotate(${rotation}deg)` }}
 src={basketball} />
            </section>
        </div>
    )
}

export default BallBounce;