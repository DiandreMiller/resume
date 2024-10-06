import React, { useState, useEffect } from "react";
import basketball from '../Assets/basketball-removebg-preview.png';

const BallLaunch = () => {
    const [yPosition, setYPosition] = useState<number>(600); 
    const [xPosition, setXPosition] = useState<number>(800); 
    const [velocityX, setVelocityX] = useState<number>(0);
    const [velocityY, setVelocityY] = useState<number>(0);
    const [rotation, setRotation] = useState<number>(0);
    const gravity: number = 0.98;
    const bounce: number = -0.8;
    const friction: number = 0.99;
    const floorY: number = 720;

 
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
                    setVelocityY(velocityY * bounce); // Bounce effect
                } else {
                    setVelocityY(velocityY + gravity);
                }
                return newY;
            });

            setXPosition((previousX) => {
                const newX: number = previousX + velocityX;
                setVelocityX(velocityX * friction); // Slow down horizontally
                return newX;
            });

            setRotation((previousRotation) => previousRotation + velocityX * 5);
        }, 50);

        return () => clearInterval(interval);
    }, [velocityX, velocityY]);

    return (
        <div 
            onClick={handleClick} 
            style={{ 
                position: "relative", 
                width: "100vw", 
                height: "100vh", 
                zIndex: 5, // Ensure ball is above other elements
            }}
        >
            <img
                className="h-9"
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
