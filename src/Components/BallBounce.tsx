import React from "react";
import basketball from '../Assets/basketball-removebg-preview.png'

const BallBounce = () => {

    

    return (

        <div>
            <section className="h-96 w-96 bg-orange-300" >
                <img className="h-1/4" src={basketball} />
            </section>
        </div>
    )
}

export default BallBounce;