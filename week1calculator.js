function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return a / b;
        default:
            return "Invalid operation";
    }
}

const a = 10;
const b = 5;

console.log("Addition: " + calculator(a, b, "add"));
console.log("Subtraction: " + calculator(a, b, "subtract"));
console.log("Multiplication: " + calculator(a, b, "multiply"));
console.log("Division: " + calculator(a, b, "divide"));
