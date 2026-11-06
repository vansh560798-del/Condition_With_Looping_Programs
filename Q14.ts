// Find factorial using for loop
let n: number = 5;
let fact: number = 1;

for (let i: number = 1; i <= n; i++) {
    fact = fact * i;
}

console.log("Factorial =", fact);
