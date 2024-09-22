import React from "react";

const Navbar = () => {


    return (
        <div>
            <nav className="w-full h-16 fixed top-0 left-0 z-10 flex" style={{ background: 'rgb(245,136,115)', transform: 'translateY(0px)' }} >
                <h2 className="lg:text-4xl start ml-32 flex items-center">Diandre Miller</h2>
            </nav>
        </div>
    )
}

export default Navbar;