// 10. Sum All Numbers Using reduce()

function sumNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  const nums = [1, 2, 3, 4, 5];
  console.log("Sum of numbers:", sumNumbers(nums));
  