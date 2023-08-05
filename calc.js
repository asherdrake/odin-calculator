function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNum;
let secondNum;
let operator;
let result;
function operate() {
    if (operator == '+') {
        result = add(firstNum, secondNum);
    }
    
    if (operator == '-') {
        result = subtract(firstNum, secondNum);
    }

    if (operator == '*') {
        result = multiply(firstNum, secondNum);
    }

    if (operator == '/') {
        result = divide(firstNum, secondNum);
    }
}

function addDigit(digit) {
    if (operator == null) {
        firstNum += digit;
    } else {
        secondNum += digit;
    }
}

function setOperator(op) {
    operator = op;
}

let digits = document.getElementsByClassName('digit')
let operators = documennt.getElementsByClassName('operators');
let clear = document.getElementById('clear');

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', addDigit(digits[i].textContent));
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', setOperator(operators[i].textContent));
}