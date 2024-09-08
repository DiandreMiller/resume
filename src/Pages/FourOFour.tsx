import React from "react"
import shocked from '../Assets/shocked.gif'
import walkingAway from '../Assets/walkingAway.GIF'
import { useState, useEffect } from "react"

const FourOFour = () => {

    const [visibleShocker, setVisibleShocked] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleShocked(false);
        }, 3000)

        return () => clearInterval(timer);
    }, [])

    return (
        <div>
            <h1 className=""> The page you are looking for does not exist!</h1>
            {visibleShocker && (
                <img src={shocked} alt="A person shocked" />
            )}
            <img src={walkingAway} alt='A person walking away'/>
        </div>
    )

}

export default FourOFour;