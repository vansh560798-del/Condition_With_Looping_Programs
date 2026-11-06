"use strict";
// Count digits
let n = 12345;
let count = 0;
while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}
console.log("Digits =", count);
