// Reverse a number using do-while loop
let n: number = 1234;
let reverse: number = 0;

do {
    let digit: number = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
} while (n > 0);

console.log("Reverse =", reverse);
