/*
Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.
*/

const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter the number: "))
console.log("The Prime Factors are: ");
for (i = 2; i <= n; i++) {
    while (n % i == 0) {
        console.log(i);
        n = n / i;
    }
}