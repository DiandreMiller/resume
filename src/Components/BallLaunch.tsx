import React, { useState, useEffect } from "react";
import basketball from '../Assets/basketball-removebg-preview.png';
import TrajectoryDots from './TrajectoryDots';

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
    const [hasLaunched, setHasLaunched] = useState<boolean>(false);

    /** Aim preview: shown while mouse is down, used to launch on release */
    const [isAiming, setIsAiming] = useState<boolean>(false);
    const [aimVelocityX, setAimVelocityX] = useState<number>(0);
    const [aimVelocityY, setAimVelocityY] = useState<number>(0);

    const bounceEffect: number = -0.8;
    const gravity: number = 0.98;
    const friction: number = 0.99;
    const floorY: number = 720;
    const launchFactor: number = 0.0685;

    const leftBoundary: number = -50;
    const rightBoundary: number = 1450;

    const velocityStoppedX: number = 0.05;
    const velocityStoppedY: number = 0.05;


    //Backboard Dimensions.

    //Top of right backboard is 200 y, 1200 x
    //Bottom of right backboard is 350 y, 1200 x
    //Top of left backboard is 200 y, 200 x
    //Bottom of left backboard is 350 y, 200 x

    const rightBackboardTop: number[] = [200, 1200];
    const rightBackboardBottom: number[] = [350, 1200];
    const leftBackboardTop: number[] = [200, 200];
    const leftBackboardBottom: number[] = [350, 200];

    const updateAimFromClient = (clientX: number, clientY: number) => {
        const distanceX = clientX - xPosition;
        const distanceY = clientY - yPosition;
        setAimVelocityX(distanceX * launchFactor);
        setAimVelocityY(distanceY * launchFactor);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsAiming(true);
        updateAimFromClient(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isAiming) updateAimFromClient(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
        if (!isAiming) return;
        setIsAiming(false);
        setVelocityX(aimVelocityX);
        setVelocityY(aimVelocityY);
        setHasLaunched(true);
    };

    const handleMouseLeave = () => {
        if (isAiming) {
            setIsAiming(false);
            setVelocityX(aimVelocityX);
            setVelocityY(aimVelocityY);
            setHasLaunched(true);
        }
    };

    // Ball movement logic with parabolic motion
    useEffect(() => {
        const interval = setInterval(() => {
            setYPosition((previousY) => {
                let newY: number = previousY + velocityY;
                if (Math.abs(velocityY) < velocityStoppedY) {
                    return floorY
                }
                if (newY >= floorY) {
                    newY = floorY;
                    setVelocityY(velocityY * bounceEffect);
                } else {
                    setVelocityY(velocityY + gravity); 
                }

                // console.log('newY', newY);
                return newY;
            });
    
            setXPosition((previousX) => {
                let newX: number = previousX + velocityX;
    
                // Collision with right backboard
                if (
                    newX + 15 >= rightBackboardTop[1] && 
                    yPosition >= rightBackboardTop[0] && 
                    yPosition <= rightBackboardBottom[0]
                ) {
                    newX = rightBackboardTop[1] - 15; 
                    setVelocityX(-0.8 * velocityX * friction); 
                }
                
                // Collision with left backboard
                if (
                    newX - 15 <= leftBackboardTop[1] &&
                    yPosition >= leftBackboardTop[0] &&
                    yPosition <= leftBackboardBottom[0]
                ) {
                    newX = leftBackboardTop[1] + 15; // Adjust X position
                    setVelocityX(-0.8 * velocityX * friction); // Reverse X velocity
                }
    
                // Check boundaries
                if (newX <= leftBoundary) {
                    newX = leftBoundary; 
                    setVelocityX(-0.5 * velocityX * friction); 
                }
                if (newX >= rightBoundary) {
                    newX = rightBoundary; 
                    setVelocityX(-0.5 * velocityX * friction); 
                }
                return newX;
            });
    
            setRotation((previousRotation) => previousRotation + velocityX * 5);
            setVelocityX((previousVelocityX) => previousVelocityX * friction);
    
            // Stop the ball if both velocities are low
            if (Math.abs(velocityX) < velocityStoppedX && Math.abs(velocityY) < velocityStoppedY) {
                setVelocityX(0);
                setVelocityY(0);
                setHasLaunched(false); // Allow next shot
            }
            
    
        }, 50); 
    
        return () => clearInterval(interval); 
    }, [velocityX, velocityY, bounceEffect, leftBoundary, rightBoundary, friction, velocityStoppedY, velocityStoppedX]);
    
    return (
        <div 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ 
                position: "relative", 
                width: "100vw", 
                height: "100vh", 
                zIndex: 5, 
                cursor: isAiming ? "crosshair" : "pointer",
            }}
        >
            {isAiming && (
                <TrajectoryDots
                    initialX={xPosition + 18}
                    initialY={yPosition + 18}
                    velocityX={aimVelocityX}
                    velocityY={aimVelocityY}
                    gravity={gravity}
                    floorY={floorY}
                    bounceEffect={bounceEffect}
                    friction={friction}
                    simulateBounces={true}
                />
            )}
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


































