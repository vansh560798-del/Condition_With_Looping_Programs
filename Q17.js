"use strict";
// Check whether a number is palindrome
let n = 121;
let temp = n;
let reverse = 0;
while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
}
if (temp == reverse) {
    console.log("Palindrome");
}
else {
    console.log("Not Palindrome");
}
