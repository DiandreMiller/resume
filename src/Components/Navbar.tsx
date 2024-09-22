import React from "react";
import gitHub from '../Assets/gitHubLogo.png'
import linkedIn from '../Assets/linkedInLogo.png'

import { Link } from "react-router-dom";

const Navbar = () => {

    //To Do: Glow dark blue when hover on social media links


    return (
        <div>
            <nav className="w-full h-16 fixed top-0 left-0 z-10 flex" style={{ background: 'rgb(245,136,115)', transform: 'translateY(0px)' }} >
                
                <Link to='/'><h2 className="lg:text-4xl start ml-32 flex items-center rochester">Diandre Miller</h2></Link>
                <div className="ml-auto flex items-center space-x-4 mr-10">
                <Link to='https://www.linkedin.com/in/diandre-miller/' target="blank"><img className="h-11" style={{ transform: 'translateX(-128px)'}} src={linkedIn} /></Link>
                <Link to='https://github.com/DiandreMiller' target="blank"><img className="h-10" style={{ transform: 'translateX(-128px)'}} src={gitHub} /></Link>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;