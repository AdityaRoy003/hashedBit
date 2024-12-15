// 9. Merge Two Objects


function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  const object1 = { a: 1, b: 2 };
  const object2 = { b: 3, c: 4 };
  
  console.log("Merged object:", mergeObjects(object1, object2));
  