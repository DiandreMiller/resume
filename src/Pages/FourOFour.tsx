import React from "react"
import { useState, useEffect } from "react"
import shocked from '../Assets/shocked.gif'
import walkingAway from '../Assets/walkingAway.GIF'
import doIt from '../Assets/doIt.GIF'
import goodJob from '../Assets/goodJob.GIF'
import bye from '../Assets/BYE.GIF'

const FourOFour = () => {

    const [visibleShocker, setVisibleShocked] = useState<boolean>(true);
    const [visibleWalkingAway, setVisibleWalkingAway] = useState<boolean>(false);
    const [visibleDoIt, setVisibleDoIt] = useState<boolean>(false);
    const [visibleGoodJob, setVisibleGoodJob] = useState<boolean>(false);
    const [visibleBye, setVisibleBye] = useState<boolean>(false);

    useEffect(() => {
        const timer: number = setTimeout(() => {
            setVisibleShocked(false);
            setVisibleWalkingAway(true);
        }, 3000);

        const secondTimer: number = setTimeout(() => {
            setVisibleWalkingAway(false);
            setVisibleDoIt(true);
        }, 6000);

        const thirdTimer: number = setTimeout(() => {
            setVisibleDoIt(false);
        }, 11000);


        return () => {
            clearTimeout(timer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
        };
        
    }, []);


    return (
        <div>
            <h1 className=""> The page you are looking for does not exist!</h1>
            {visibleShocker && (
                <img src={shocked} alt="A person shocked" />
            )}

            {visibleWalkingAway && (
                <img src={walkingAway} alt='A person walking away'/>
            )}

            {visibleDoIt && (
                <img src={doIt} alt="Man saying Do it!"/>
            )}
        </div>
    )

}

export default FourOFour;