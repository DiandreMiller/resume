const inspirational: string[] = [
    `Enjoy the process - Josh Nelson`,
    `Believe you can and you're halfway there`,
    `Don't watch the clock; do what it does. Keep going`,
    `The harder you work for something, the greater you'll feel when you achieve it`,
    `Success is not final, failure is not fatal: It is the courage to continue that counts`,
    `First they'll ask why, then they'll ask how`

];


const getRandomQuote = (stringArr: string[]): string => {
   
    const randomNumber: number = Math.floor(Math.random() * stringArr.length);
    const randomQuote: string = stringArr[randomNumber];
    return randomQuote;

}

export {getRandomQuote, inspirational} ;



