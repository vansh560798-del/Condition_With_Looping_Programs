"use strict";
// Check whether a number is Armstrong
let n = 153;
let temp = n;
let sum = 0;
let digits = n.toString().length;
while (n > 0) {
    let digit = n % 10;
    sum = sum + Math.pow(digit, digits);
    n = Math.floor(n / 10);
}
if (temp == sum) {
    console.log("Armstrong Number");
}
else {
    console.log("Not Armstrong Number");
}
