/*Write a program that computes a factorial of a number taken as input.
   5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/
const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the number : "))
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
console.log("Factorial of " + n + " is " + factorial);