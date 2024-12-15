// 6. Log Greeting Message Using Object Properties
const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
  };
  
  function greetPerson(person) {
    console.log(`Hello, my name is ${person.name}. I am ${person.age} years old and work as a ${person.occupation}.`);
  }
  
  greetPerson(person);
  