let string = 'INDIA';
let charArray = string.split('');
charArray.splice(2, 2, 'DONESIA');
let result = charArray.join('');
console.log(result);