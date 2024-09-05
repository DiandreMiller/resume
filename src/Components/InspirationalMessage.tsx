import React from "react";
import { getRandomQuote, inspirational } from "./quote";
import { useState, useEffect } from "react";

const InspirationalMessage = () => {

    const [motivation, setMotivation] = useState<string>('');

    useEffect(() => {
        const quote: string = getRandomQuote(inspirational);
        setMotivation(quote);
        
    }, [])

    console.log('motivation:', motivation);

    // if(!motivation) {
    //     return 'This is not working!'
    // }

    return (

        <div>
            <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 rochester">{motivation}</h3>
        </div>
    )
}

export default InspirationalMessage;