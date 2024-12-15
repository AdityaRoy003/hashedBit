function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed.';
            }
            break;
        default:
            return 'Error: Invalid operation. Please use "add", "subtract", "multiply", or "divide".';
    }

    return result;
}


console.log(calculate(10, 15, 'add'));       
console.log(calculate(100, 5, 'subtract'));  
console.log(calculate(17, 3, 'multiply'));  
console.log(calculate(10, 8, 'divide'));   
console.log(calculate(10, 80, 'divide'));    
console.log(calculate(10, 13, 'modulus'));  