import React from "react";
import gitHub from '../Assets/gitHubLogo.png'
import linkedIn from '../Assets/linkedInLogo.png'
import hamburgerMenu from '../Assets/hamburgerMenu.png'

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    //To Do: Glow dark blue when hover on social media links

    const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleDropDownMenu = (): void => {
        setIsDropDownVisible(previous => !previous);
        
    }

    const handleNavigate = (path: string): void => {
        navigate(path);
        setIsDropDownVisible(false);
    }


    return (
        <div>
            <nav className="w-full h-16 fixed top-0 left-0 z-10 flex items center" style={{ background: 'rgb(245,136,115)', transform: 'translateY(0px)' }} >
                <img onClick={handleDropDownMenu} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300 ml-2" src={hamburgerMenu} alt="options menu" />
                {isDropDownVisible && (
                    <div className="flex bg-red-600 h-50 w-56 absolute" style={{transform: 'translateY(64px) translateX(0px)'}}>
                        <ul>
                            
                            <li onClick={()=> handleNavigate('/')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Home</li>
                            <li onClick={()=> handleNavigate('/meet-me')}className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Meet Me</li>
                            <li onClick={()=> handleNavigate('/feedback')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Feedback</li>
                            <li onClick={()=> handleNavigate('/sign-in')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Sign In</li>
                            <li onClick={()=> handleNavigate('/create-an-account')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Create An Account</li>
                            <li onClick={()=> handleNavigate('/my-projects')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">My Projects</li>
                            <li onClick={()=> handleNavigate('/1v1')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Play 1 v 1 (Coming Soon)</li>
                            <li onClick={()=> handleNavigate('/build-your-own-resume')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">Build Your Own Resume (Coming Soon)</li>
                            <li onClick={()=> handleNavigate('/faq')} className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300">FAQ</li>
                        </ul>
                    </div>
                    
                )}
                
                <Link to='/'><h2 className="lg:text-4xl start ml-32 rochester hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300 " style={{ transform: 'translateY(9px)'}}>Diandre Miller</h2></Link>
                <div className="ml-auto flex items-center space-x-4 mr-10">
                <Link to='https://www.linkedin.com/in/diandre-miller/' target="blank"><img className="h-11 hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300" style={{ transform: 'translateX(-128px)'}} src={linkedIn} /></Link>
                <Link to='https://github.com/DiandreMiller' target="blank"><img className="h-10 hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300" style={{ transform: 'translateX(-128px)'}} src={gitHub} /></Link>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;