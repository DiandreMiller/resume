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
        <div className='bg-black bg-opacity-50 h-full ml-60 mr-60 rounded-lg justify-center items-center' style={{height: '360px', transform: 'translateY(-100px)'}}>
            <div className='flex w-full justify-center items-center'>
            <div className='w-1/2 text-2xl text-center sixtyfour text-title'>
                {currentText}
                </div>
            </div>
         </div>
    )
}

export default TypeWriter;

