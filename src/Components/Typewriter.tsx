import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { v4 as uuidv4 } from 'uuid';

const TypeWriter = ({instructions}: {instructions: string}) => {

    const [currentText, setCurrentText] = useState<string>('');
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        if (currentIndex < instructions.length) {
            const timer = setTimeout(() => {
                setCurrentText(prev => prev + instructions[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, instructions]);

    return (
        // justify-center items-center text-center 
        <div className='flex w-full justify-center items-center'>
            <div className='w-1/2 text-black text-4xl text-center'>
                {currentText}
            </div>
        </div>
    )
}

export default TypeWriter;

