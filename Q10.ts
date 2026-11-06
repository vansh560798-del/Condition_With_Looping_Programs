// Sum of digits using do-while loop
let n: number = 1234;
let sum: number = 0;

do {
    let digit: number = n % 10;
    sum = sum + digit;
    n = Math.floor(n / 10);
} while (n > 0);

console.log("Sum =", sum);
