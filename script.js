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