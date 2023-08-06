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

let firstNum = '';
let secondNum = '';
let operator;
let result;
let display = document.getElementById('display');
let digits = document.getElementsByClassName('digit');
let operators = document.getElementsByClassName('operator');
let equals = document.getElementById('equals');
let clear = document.getElementById('clear');

function operate() {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operator == '+') {
        let result = add(firstNum, secondNum);
        display.textContent = result;
        firstNum = result;
    }
    
    if (operator == '-') {
        let result = subtract(firstNum, secondNum);
        display.textContent = result;
        firstNum = result;
    }

    if (operator == '*') {
        let result = multiply(firstNum, secondNum);
        display.textContent = result;
        firstNum = result;
    }

    if (operator == '/') {
        let result = divide(firstNum, secondNum);
        display.textContent = result;
        firstNum = result;
    }
}

function addDigit(digit) {
    if (firstNum == '') {
        display.textContent = '';
    }

    if (operator == null) {
        firstNum += digit;
        display.textContent += digit;
    } else {
        secondNum += digit;
        display.textContent += digit;
    }
}

function setOperator(op) {
    if (operator != null) {
        return;
    }
    display.textContent += ' ' + op + ' ';
    operator = op;
}

function clearDisplay() {
    display.textContent = '0000';
    firstNum = '';
    secondNum = '';
    operator = null;
}

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click', function() {
        addDigit(digits[i].textContent);
    });
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        setOperator(operators[i].textContent);
    });
}

equals.addEventListener('click', function() {
    if (secondNum == '') {
        return;
    }
    operate();
    secondNum = '';
    operator = null;
})

clear.addEventListener('click', function() {
    clearDisplay()
});