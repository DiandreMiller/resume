"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inspirational = [
    "Enjoy the process",
    "Believe you can and you're halfway there",
    "Don't watch the clock; do what it does. Keep going",
    "The harder you work for something, the greater you'll feel when you achieve it",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "First they'll ask why, then they'll ask how"
];
var quotes = function (stringArr) {
    var randomNumber = Math.floor(Math.random() * stringArr.length);
    return stringArr[randomNumber];
};
exports.default = quotes;
