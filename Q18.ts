// Check whether a number is Armstrong
let n: number = 153;
let temp: number = n;
let sum: number = 0;
let digits: number = n.toString().length;

while (n > 0) {
    let digit: number = n % 10;
    sum = sum + Math.pow(digit, digits);
    n = Math.floor(n / 10);
}

if (temp == sum) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}
