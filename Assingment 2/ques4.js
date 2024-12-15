function sumOfProducts(n1, n2) {
    const str1 = n1.toString();
    const str2 = n2.toString();
    let sum = 0;
    const maxLength = Math.max(str1.length, str2.length);

    for (let i = 0; i < maxLength; i++) {
        const digit1 = i < str1.length ? parseInt(str1[str1.length - 1 - i]) : 0;
        const digit2 = i < str2.length ? parseInt(str2[str2.length - 1 - i]) : 0;
        sum += digit1 * digit2;
    }

    return sum;
}

console.log(sumOfProducts(6, 34));  
console.log(sumOfProducts(12, 34));   
console.log(sumOfProducts(123, 45)); 
console.log(sumOfProducts(0, 34));     
console.log(sumOfProducts(56, 0));     