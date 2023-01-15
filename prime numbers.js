//Write a program that takes a input and determines if the number is a prime.

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number: "))
let count = 0;
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        count = count + 1;
    }
}
if (count == 2) {
    console.log(n, " is a prime Number");
}
else {
    console.log(n, " is not a prime number");
}