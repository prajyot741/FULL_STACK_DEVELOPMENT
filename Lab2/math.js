function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function subtract(a, b) {
    return a - b;
}

const moduleNumbers = (divide, divisor) => {
    if (divisor === 0) throw new Error("divison by zero");
    return divide % divisor;

};

module.exports = { add, multiply, divide, subtract, moduleNumbers };