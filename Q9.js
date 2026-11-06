"use strict";
// Reverse a number using do-while loop
let n = 1234;
let reverse = 0;
do {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
} while (n > 0);
console.log("Reverse =", reverse);
