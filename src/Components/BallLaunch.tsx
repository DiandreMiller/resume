import React, { useState, useEffect } from "react";
import basketball from '../Assets/basketball-removebg-preview.png';

const BallLaunch = () => {
    //1150 x to test net
    //0 y to test sky
    //660 y initial
    //800 x initial
    const [yPosition, setYPosition] = useState<number>(660); 
    const [xPosition, setXPosition] = useState<number>(800); 
    const [velocityX, setVelocityX] = useState<number>(0);
    const [velocityY, setVelocityY] = useState<number>(0);
    const [rotation, setRotation] = useState<number>(0);
    const [bounceEffect, setBounceEffect] = useState<number>(-0.8);

    //Top of right backboard is 200 y, 1200 x
    //Bottom of right backboard is 350 y, 1200 x
    

    //Top of left backboard is 200 y, 200 x
    //Bottom of left backboard is 350 y, 200 x


    const gravity: number = 0.98;
    const friction: number = 0.99;
    const floorY: number = 720;

    const leftBoundary: number = -50;
    const rightBoundary: number = 1450;

    const velocityStopped: number = 0.05;

 
    const handleClick = (e: React.MouseEvent) => {
        const clickX = e.clientX; 
        const clickY = e.clientY; 

        // Calculate distance from current ball position to the click position
        const distanceX = clickX - xPosition;
        const distanceY = clickY - yPosition;

        // Set velocity based on distance (basic calculation)
        setVelocityX(distanceX * 0.05); // Adjust speed factor as needed
        setVelocityY(distanceY * 0.05); // Adjust speed factor as needed
    };

    // Ball movement logic with parabolic motion
    useEffect(() => {
        const interval = setInterval(() => {
            setYPosition((previousY) => {
                let newY: number = previousY + velocityY;
                if (newY >= floorY) {
                    newY = floorY;
                    setVelocityY(velocityY * bounceEffect); // Bounce effect

                    if(Math.abs(velocityY) < 2) {
                        setBounceEffect(0);
                    } else {
                        setBounceEffect((previousBounce) => previousBounce * 0.9);
                    }
                } else {
                    setVelocityY(velocityY + gravity);
                }
                return newY;
            });

            setXPosition((previousX) => {
                let newX: number = previousX + velocityX;

                if(newX <= leftBoundary){
                    newX = leftBoundary;
                    setVelocityX(-0.5 * velocityX * friction);
                }
                 if(newX >= rightBoundary){
                    newX = rightBoundary;
                    setVelocityX(-0.5 * velocityX * friction);
                }
                return newX;
            });

            setRotation((previousRotation) => previousRotation + velocityX * 5);
            setVelocityX((previousVelocityX) => previousVelocityX * friction);

            if (Math.abs(velocityX) < velocityStopped && Math.abs(velocityY) < velocityStopped) {
                setVelocityX(0);
                setVelocityY(0);
            }
            
        }, 50);

        return () => clearInterval(interval);

    }, [velocityX, velocityY, bounceEffect, leftBoundary, rightBoundary, friction, velocityStopped]);

    return (
        <div 
            onClick={handleClick} 
            style={{ 
                position: "relative", 
                width: "100vw", 
                height: "100vh", 
                zIndex: 5, 
            }}
        >
            <img
                className="h-9 z-10"
                style={{
                    position: "absolute",
                    left: `${xPosition}px`,
                    top: `${yPosition}px`,
                    transform: `rotate(${rotation}deg)`,
                    zIndex: 10,
                }}
                src={basketball}
                alt="basketball"
            />
        </div>
    );
};

export default BallLaunch;
