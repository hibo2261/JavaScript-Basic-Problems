/*
    Help user find degF or degC based on their Conversion Selection. Use
    Case Statement and ensure that the inputs are within the Freezing Point (
    0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
    a. degF = (degC * 9/5) + 32
    b. degC = (degF – 32) * 5/9
*/

/*
    Function to convert degC to degF
*/
let celcius_To_farenheit = function (celcius) {
    return farenheit = (celcius * 9 / 5) + 32;
}

/*
    Function to convert degF to degC
*/
let farenheit_to_celcius = function (farenheit) {
    return celcius = (farenheit - 32) * (5 / 9);
}

/*
    Main code for temperature conversion
*/
const prompt = require('prompt-sync')();
console.log();
let selection = parseInt(prompt(" Enter what your want to do =>   1) celcius to farenheit , 2) farenheit to celcius  => "));
switch (selection) {
    case 1:
        let celcius = prompt(" Enter temprature -> ");
        if (0 <= celcius && celcius <= 100) {
            console.log(" " + celcius + " celcius = " + celcius_To_farenheit(celcius) + " farenheit \n");
        } else {
            console.log(" Invalid Temperature...! \n")
        }
        break;
    case 2:
        let farenheit = prompt(" Enter temprature -> ");
        if (32 <= farenheit && farenheit <= 212) {
            console.log(" " + farenheit + " farenheit = " + farenheit_to_celcius(farenheit) + " celcius \n");
        } else {
            console.log(" Invalid Temperature...! \n")
        }
        break;
    default:
        console.log(" Invalid Input \n")
}