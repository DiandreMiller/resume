import React, { useState, useEffect } from "react";

interface TypeWriterProp {
    text: string;
    delay: number;
    
}

const TypeWriter: React.FC<TypeWriterProp> = ({text, delay}) => {

    const [currentText, setCurrentText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if(currentIndex < text.length) {
            const timeOut = setTimeout(() => {
                setCurrentText(previousText => previousText + text[currentIndex]);
                setCurrentIndex(previousIndex => previousIndex + 1);
            }, delay);

            return () => clearTimeout(timeOut);
        }
    }, [currentIndex, delay, text])


    
    return (
        <span>
            {currentText}
        </span>

    )
}

export default TypeWriter;