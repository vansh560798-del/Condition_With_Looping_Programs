// Count digits
let n: number = 12345;
let count: number = 0;

while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}

console.log("Digits =", count);
