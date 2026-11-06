"use strict";
// Count attempts to enter the correct number
// Run this program in a browser because it uses prompt().
let correctNumber = 7;
let guess = 0;
let attempts = 0;
while (guess != correctNumber) {
    guess = Number(prompt("Enter a number:"));
    attempts++;
    if (guess == correctNumber) {
        console.log("Correct Number!");
    }
    else {
        console.log("Try Again!");
    }
}
console.log("Total Attempts =", attempts);
