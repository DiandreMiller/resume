import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

interface DraggableBallProps {
    onDragEnd: (velocityX: number, velocityY: number) => void;
    children: React.ReactNode;
    onDragMove?: (velocityX: number, velocityY: number) => void;
}

const DraggableBall: React.FC<DraggableBallProps> = ({onDragEnd, children, onDragMove}) => {

    //Adjust these values. These values may be where I want to start x and y on the court

    const [{x, y}, api] = useSpring(() =>({x: 500, y: -270}));

    const bind = useDrag(({ active, movement: [mx, my], velocity, memo = [x.get(), y.get()]}) => {
        if(active) {
            api.start({ x: memo[0] + mx, y: memo[1] + my, immediate: true})
        } 

        if(onDragMove) {
            onDragMove(mx * velocity, my * velocity);
        } else {
            onDragEnd(mx * velocity, my * velocity);
        }

        return memo;
    })


    return (

        <animated.div {...bind()} style={{ x, y, position: 'relative'}}>
            {children}
        </animated.div>
    )
}

export default DraggableBall;