// 3. Add an Element Using push() & Remove it Using pop()
function modifyArray(arr) {
    arr.push("NewFruit");
    arr.pop();
    return arr;
  }
  
  const numbers = [1, 2, 3, 4];
  console.log("Modified Array:", modifyArray(numbers));
  