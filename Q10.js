"use strict";
// Sum of digits using do-while loop
let n = 1234;
let sum = 0;
do {
    let digit = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
} while (n > 0);
console.log("Sum =", sum);
