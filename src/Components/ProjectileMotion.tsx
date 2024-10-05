import { useState, useEffect } from "react";

interface ProjectileMotionProps {
    initialVelocityX: number,
    initialVelocityY: number,
    onChangePosition: (x: number, y: number) => void;
}

const ProjectileMotion: React.FC<ProjectileMotionProps> = ({initialVelocityX, initialVelocityY, onChangePosition}) => {

    const [xPosition, setXPosition] = useState<number>(0);
    const [yPosition, setYPosition] = useState<number>(0);
    const [velocityX, setVelocityX] = useState<number>(initialVelocityX);
    const [velocityY, setVelocityY] = useState<number>(initialVelocityY);

    const gravity: number = 0.98;

    useEffect(() => {
        const interval = setInterval(() => {
            setYPosition((previousY) => {
                const newY: number = previousY + velocityY;
                setVelocityY(velocityY + gravity);
                return newY;
            });

            setXPosition((previousX) => {
                return previousX + velocityX;
            });

            onChangePosition(xPosition, yPosition)
        }, 50);

        return () => clearInterval(interval);
    },[velocityX, velocityY, gravity, xPosition, yPosition, onChangePosition]);

    return null;

}

export default ProjectileMotion