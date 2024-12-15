function reverseString(str) {
    // Convert the string to an array, reverse it, and join it back to a string
    return str.split('').reverse().join('');
}

// Example usage
const input = "Hello";
const output = reverseString(input);
console.log(output); // Output: olleH