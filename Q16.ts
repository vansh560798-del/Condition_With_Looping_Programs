// Check whether a number is prime
let n: number = 7;
let count: number = 0;

for (let i: number = 1; i <= n; i++) {
    if (n % i == 0) {
        count++;
    }
}

if (count == 2) {
    console.log("Prime Number");
} else {
    console.log("Not Prime Number");
}
