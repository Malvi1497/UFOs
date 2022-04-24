// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  console.log(addition(4, 5));

// Takes two numbers and adds them using a different method
function addition(a, b) { return a + b;}
console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  console.log(doubleAddition(65, 34));

// Simple JavaScript log statement using traditional functions
function printHello() {
    return "Hello there!";
  }

  console.log(printHello());
  
  // Simple arrow functions
  printHello = () => "Hello there!";
  
  console.log(printHello());

  // Original addition function
function addition(a, b) {
    return a + b;
  }

  // Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  // Converted to an arrow function
  doubleAddition = (c, d) => addition(c, d) * 2;

console.log(doubleAddition(33, 25));

// create for loops 
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(friends) {
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
    }
 }

listLoop(friends);

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
for (var i = 0; i < vegetables.length; i++)
  console.log("I love " + vegetables[i]);

for (var i = 20; i < 25; i++) {
  console.log("I am " + i + " years old.");
}

