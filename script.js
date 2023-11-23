let first_operand = undefined;
let second_operand = undefined;
let operator = undefined;

function apply_operator(first_operand, second_operand, operator) {
    if (operator === "+") {
        return first_operand + second_operand;
    } else if (operator === "-") {
        return first_operand - second_operand;
    } else if (operator === "*") {
        return first_operand * second_operand;
    } else {
        return first_operand / second_operand;
    }
}
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

function displayNumber(e) {
    display.textContent = e.target.textContent;
}
buttons.forEach(button => {
    button.addEventListener('click', displayNumber);
})