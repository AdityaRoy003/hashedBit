// 8. Get All Keys of an Object

function getObjectKeys(obj) {
    return Object.keys(obj);
  }
  
  const sampleObject = { name: "Alice", age: 25, city: "New York" };
  console.log("Keys of object:", getObjectKeys(sampleObject));
  