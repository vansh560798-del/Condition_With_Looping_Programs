// Check whether a number is palindrome
let n: number = 121;
let temp: number = n;
let reverse: number = 0;

while (n > 0) {
    let digit: number = n % 10;
    reverse = reverse * 10 + digit;
    n = Math.floor(n / 10);
}

if (temp == reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
