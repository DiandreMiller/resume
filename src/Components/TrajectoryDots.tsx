interface TrajectoryDotsProp {
    initialX: number,
    initialY: number,
    velocityX: number,
    velocityY: number,
    gravity?: number;
    floorY?: number;
    bounceEffect?: number;
    friction?: number;
    dotCount?: number;
    /** If true, simulates bounces off floor to match ball physics */
    simulateBounces?: boolean;
}

/** BallLaunch runs at 50ms per tick; velocity is pixels per tick, gravity added per tick */
const TICK_MS = 50;
const TICK_SEC = TICK_MS / 1000;

const TrajectoryDots: React.FC<TrajectoryDotsProp> = ({
    initialX,
    initialY,
    velocityX,
    velocityY,
    gravity = 0.98,
    floorY = 720,
    bounceEffect = -0.8,
    friction = 0.99,
    dotCount = 60,
    simulateBounces = true,
}) => {
    const dots: { x: number; y: number; opacity: number }[] = [];

    if (simulateBounces) {
        let x = initialX;
        let y = initialY;
        let vX = velocityX;
        let vY = velocityY;
        const dotSpacing = 5;
        const maxSteps = 400;

        dots.push({ x, y, opacity: 1 });

        for (let i = 0; i < maxSteps; i++) {
            let newY = y + vY;
            if (newY >= floorY) {
                newY = floorY;
                x = x + vX;
                dots.push({
                    x,
                    y: newY,
                    opacity: 1 - (dots.length / dotCount) * 0.7,
                });
                break;
            } else {
                vY = vY + gravity;
            }
            y = newY;

            x = x + vX;
            vX = vX * friction;

            if (i > 0 && i % dotSpacing === 0) {
                dots.push({
                    x,
                    y,
                    opacity: 1 - (dots.length / dotCount) * 0.7,
                });
            }
        }
    } else {
        const timeStep = 0.05;
        for (let i = 0; i < dotCount; i++) {
            const time = timeStep * i;
            const x = initialX + velocityX * (time / TICK_SEC);
            const y = initialY + velocityY * (time / TICK_SEC) + 0.5 * (gravity / TICK_SEC) * time * time;
            dots.push({
                x,
                y,
                opacity: 1 - (i / dotCount) * 0.7,
            });
        }
    }

    return (
        <div className="pointer-events-none" style={{ position: 'absolute', left: 0, top: 0, zIndex: 4 }}>
            {dots.map((dot, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-black"
                    style={{
                        left: `${dot.x}px`,
                        top: `${dot.y}px`,
                        width: '6px',
                        height: '6px',
                        opacity: dot.opacity,
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            ))}
        </div>
    );
}

export default TrajectoryDots;
