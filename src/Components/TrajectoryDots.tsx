interface TrajectoryDotsProp {
    initialX: number,
    initialY: number,
    velocityX: number,
    velocityY: number,
    gravity?: number;
}

const TrajectoryDots: React.FC<TrajectoryDotsProp> = ({initialX, initialY, velocityX, velocityY, gravity = 0.98}) => {

    const dots: JSX.Element[] = [];
    const timeStamp: number = 0.2;
    const dotCount: number = 20;

    for(let i = 0; i < dotCount; i++) {
        const time: number = timeStamp * i;
        const x: number = initialX + velocityX * time;
        const y: number = initialY + (velocityY * time) + (0.5 * gravity * time * time);

        dots.push(
            <div key={i}
            className="absolute rounded-full bg-black"
            style={{
                left:`${x}px`,
                top: `${y}px`,
                width: '5px',
                height: '5px',
                opacity: 1 - (i / dotCount),
            }}
            ></div>
        )
    }

    return (
        <div>{dots}</div>
    )
}

export default TrajectoryDots;
