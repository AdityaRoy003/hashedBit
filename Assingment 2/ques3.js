function findTax(salary) {
    let taxRate;
    let taxAmount;

    // Determine the tax rate based on the salary
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0; // 0% tax
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.10; // 10% tax
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.20; // 20% tax
            break;
        case (salary > 1500000):
            taxRate = 0.30; // 30% tax
            break;
        default:
            return 'Error: Invalid salary amount.';
    }

    // Calculate the tax amount
    taxAmount = salary * taxRate;

    return taxAmount;
}

console.log(findTax(400000));  
console.log(findTax(600000));   
console.log(findTax(1200000));  
console.log(findTax(1600000));  
console.log(findTax(-100000));  