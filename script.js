let first_operand = 0;
let second_operand = undefined;
let operator = "";
let state = true;

function apply_operator(first_operand, second_operand, operator) {
    if (operator === "+") {
        return first_operand + second_operand;
    } else if (operator === "-") {
        return first_operand - second_operand;
    } else if (operator === "x") {
        return first_operand * second_operand;
    } else {
        return first_operand / second_operand;
    }
}
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num");
const opButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

function displayNums() {
    if (operator === "") {
        display.textContent = first_operand;
    } else if (second_operand === undefined) {
        display.textContent = first_operand + operator;
    } else {
        display.textContent = first_operand + operator + second_operand;
    }
}

function evalNum(e) {
    const num = parseInt(e.target.textContent, 10);
    if (state === true) {
        first_operand = first_operand * 10 + num;
    } else {
        second_operand = second_operand !== undefined ? second_operand * 10 + num : num;
    }
    displayNums();
}

function evalOp(e) {
    if (state && operator === "") {
        operator = e.target.textContent;
        state = false;
        displayNums();
    } else {

    }
}

function equal(e) {
    if (operator === "") {
        displayNums();
        first_operand = 0;
    } else if (second_operand === undefined) {
    } else {
        const result = apply_operator(first_operand, second_operand, operator);
        first_operand = result;
        operator = "";
        second_operand = undefined;
        displayNums();
        first_operand = 0;
        state = true;
    }
}

numButtons.forEach(button => {
    button.addEventListener('click', evalNum);
})

opButtons.forEach(button => {
    button.addEventListener('click', evalOp);
})

equalButton.addEventListener('click', equal);