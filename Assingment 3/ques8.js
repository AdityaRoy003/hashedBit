function repeatedSumOfDigits(num) {
    // Function to calculate the sum of digits
    const sumOfDigits = (n) => {
        return n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    };

    // Continue summing the digits until we have a single digit
    while (num >= 10) {
        num = sumOfDigits(num);
    }

    return num;
}

// Example usage
console.log(repeatedSumOfDigits(456)); // Output: 6
console.log(repeatedSumOfDigits(12345)); // Output: 6
console.log(repeatedSumOfDigits(99)); // Output: 9