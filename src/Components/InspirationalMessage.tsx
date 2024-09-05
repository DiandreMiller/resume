import React from "react";
import { getRandomQuote, inspirational } from "./quote";
import { useState, useEffect } from "react";

const InspirationalMessage = () => {

    const [motivation, setMotivation] = useState<string>('');

    useEffect(() => {
        const quote: string = getRandomQuote(inspirational);
        setMotivation(quote)
        
    }, [])

    return (

        <div>
            <h3>{motivation}</h3>
        </div>
    )
}

export default InspirationalMessage;