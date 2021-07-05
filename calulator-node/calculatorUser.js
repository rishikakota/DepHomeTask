var calculator = require('./calculator');
const process = require("process");
var args = process.argv;
console.log(args[0], args[1]);
var args = process.argv.slice(2);
var operation = args[0];
var args = args.slice(1).map(i => Number(i));

// var a=10, b=5;
if (operation == "addition") {
    console.log("Addition : "+calculator.addition(args));
}

if (operation == "subtraction") {
    console.log("Subtraction : "+calculator.subtraction(args));
}

if (operation == "multiplication") {
    console.log("Multiplication : " + calculator.multiplication(args));
}

if (operation == "division") {
    console.log("Division: " + calculator.division(args));
}


