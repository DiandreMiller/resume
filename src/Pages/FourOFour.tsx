//Dependencies 
import React from "react"
import { useState, useEffect } from "react"
import { Link, ScrollRestoration, useNavigate } from "react-router-dom"

//Images
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
    const [nonExistingPage, setNonExistingPage] = useState<boolean>(true);
    const [visibleResume, setVisibleResume] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        const timer: number = setTimeout(() => {
            setVisibleShocked(false);
            setVisibleWalkingAway(true);
        }, 3000);

        const secondTimer: number = setTimeout(() => {
            setVisibleWalkingAway(false);
            setVisibleDoIt(true);
            setNonExistingPage(false);
            setVisibleResume(true);
        }, 6000);


        return () => {
            clearTimeout(timer);
            clearTimeout(secondTimer);
        };
        
    }, []);

    const handleResumeClick = (event: React.MouseEvent) => {
        event.preventDefault();
        setVisibleDoIt(false);
        setVisibleGoodJob(true);
        setVisibleResume(false);
        
        setTimeout(() => {
            setVisibleGoodJob(false);
            setVisibleBye(true);

            setTimeout(() => {
                navigate('/');
            }, 1500)
        }, 1500);
    }


    return (
        <div>
    
            <div className="container max-w-full mx-auto p-4">
            {nonExistingPage && (
                <h1 className="text-black"> The page you are looking for does not exist!</h1>
            )}
    
                {visibleShocker && (
                    <img className='w-3/4 h-auto' src={shocked} alt="A person shocked" />
                )}
    
                {visibleWalkingAway && (
                    <img className='w-3/4 h-auto' src={walkingAway} alt='A person walking away'/>
                )}
    
                {visibleDoIt && (
                    <img className='w-3/4 h-auto' src={doIt} alt="Man saying Do it!"/>
                )}
    
                {visibleResume && (
                    <h1 className="text-black">Click here to see <Link to='/' onClick={handleResumeClick}>My Resume</Link> </h1>
                )}
    
                {visibleGoodJob && (
                    <img className='w-96 h-auto' src={goodJob} alt="A man with a medal that says good job" />
                )}
    
                {visibleBye && (
                    <img className='w-96 h-auto' src={bye} alt="A man with a rocket launcher flying away with the word bye" />
                )}
    
            </div>
        </div>
    )
    
    

}

export default FourOFour;