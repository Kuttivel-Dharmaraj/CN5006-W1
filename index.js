console.log("This is my first program");
console.log("Welcome John, your monthly salary is 500000");

//Sum of 2 Numbers
const num1 = 5;
const num2 = 3;
const sum = num1 + num2;
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

//Check Positive, Negative, or Zero
const readline = require('readline');

// Create an interface to read input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);

    if (number > 0) {
        console.log("The number is positive");
    } else if (number === 0) {
        console.log("The number is zero");
    } else {
        console.log("The number is negative");
    }

    rl.close();
});
