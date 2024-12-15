// 5. Filter Out Even Numbers

function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
  }
  
  const nums = [1, 2, 3, 4, 5, 6];
  console.log("Odd numbers:", filterOddNumbers(nums));
  