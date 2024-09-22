import React from "react";
import gitHub from '../Assets/gitHubLogo.png'
import linkedIn from '../Assets/linkedInLogo.png'
import hamburgerMenu from '../Assets/hamburgerMenu.png'

import { Link } from "react-router-dom";

const Navbar = () => {

    //To Do: Glow dark blue when hover on social media links


    return (
        <div>
            <nav className="w-full h-16 fixed top-0 left-0 z-10 flex items center" style={{ background: 'rgb(245,136,115)', transform: 'translateY(0px)' }} >
                <img className="hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300 ml-2" src={hamburgerMenu} alt="options menu" />
                
                <Link to='/'><h2 className="lg:text-4xl start ml-32 rochester hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300" style={{ transform: 'translateY(9px)'}}>Diandre Miller</h2></Link>
                <div className="ml-auto flex items-center space-x-4 mr-10">
                <Link to='https://www.linkedin.com/in/diandre-miller/' target="blank"><img className="h-11 hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300" style={{ transform: 'translateX(-128px)'}} src={linkedIn} /></Link>
                <Link to='https://github.com/DiandreMiller' target="blank"><img className="h-10 hover:shadow-[0_0_20px_5px_rgba(0,245,136,115)] transition duration-300" style={{ transform: 'translateX(-128px)'}} src={gitHub} /></Link>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar;