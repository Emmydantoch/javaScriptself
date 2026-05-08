//TO CHECK THE LENGTH OF A STRING
// let str = "Hello World!";
// console.log(str.length);

//CONVERTING ARRAYS TO STRING
//let car = ["bmw", "toyota", "Volvo"]
//console.log(car.toString());

//console.log(car.join(', '))
// console.log(car.pop())
//console.log(car.push('benz'))
//console.log(car.shift())
//console.log(car.unshift('bmw'))

// car.push()
// for (let i = 0; i < car.length; i++) {
//     console.log(car[i])
// }

//console.log(car.length)

//console.log(car[0])
//console.log(car[1])
// console.log(car[2])
//console.log(car[3]);


const user = { 
    profile: { 
      name: "Alice",  
      address: { 
        street: "Ado", 
        city: "New York"
      } 
    } 
  };
  
console.log(user?.profile?.name);  // "Alice"
console.log(user?.profile?.address?.street);  // "Ado"
// //   console.log(user?.profile?.address?.city);  // "New York"
// //   console.log(user?.profile?.address?.zipCode);  // undefined (no error);
  
// let x // undefined
// x = 53 // Number
// // x = 67.83838 // Number
// // x = "Hi" // String
// // x = '' // Empty String
// // x = true // Boolean
// // x = false // Boolean
// // x = [1, 2, 5] // Arrays are treated as object in JS
// // x = {firstname: "Assurance", lastname:"Ikogwe"} // Object
// console.log(typeof(x));


// //Demanding user input from  the browser
// input = prompt("What is your name")

// console.log(input);

//  //function 
// //   function add(a, b){
// //     return a + b
// //   }
// //     console.log(add(5, 6));

// //   function multiply(a, b){
// //     return a * b
// //   }
// //   console.log(multiply(5, 6));  

// //   same as Es6 (arrow function)
// const add = (a,b) => a + b
// console.log(add(5, 6));

// // ES6 allows us to set default values for function parameters.
// const greet = (name = "Guest") => `Hello, ${name}!`;
// console.log(greet());       // Output: Hello, Guest!
// console.log(greet("John")); // Output: Hello, John!


// // Rest parameters allow functions to accept multiple arguments as an array
// const sumAll = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
// console.log(sumAll(1, 2, 3, 4)); // Output: 10


// // The spread operator is used to expand arrays or objects.
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]

// console.log(newNumbers);

// // ES6 introduced let and const instead of var.
// if (true) {
//     let x = 10;
//     console.log(x); // 10
// }
// // console.log(x); // ERROR: x is not defined (outside block)


// //this is a block
// if (x = 6) { //starts block
//     let a = 8
//     const b = "Emmanuel"
//     var c = "E"
//     console.log(a) // displays a
//     console.log(b) // displays b
//     console.log(c) // displays c
// } // ends the block

// //FOR MAPS
//const no1  = [45, 4, 9, 16, 23, 67, 90]

// // it takes in 3 parameter
// // element (item)
// // array index (index)
// // array

// // Lets multiply every element by 3s
//no1.map((item, index, no1) => {
    //console.log(item) // prints out all our elements
  //console.log(no1[index]) // prints out our items
//})
const no1 = [10, 20, 30, 40];
// // const index = 2;
// // console.log(no1[index]); // Output: 30


// const no2 = { a: "apple", b: "banana", c: "cherry" };
// const index = "b";
// console.log(no2[index]); // Output: "banana"


// // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// let vehicles = ["bmw", "toyota", "Volvo"];

// // Remove 'bmw' (index 0) and insert 'Tortise'
// vehicles.splice(0, 1, "Tortise");

// console.log(vehicles); // Output: [ 'Tortise', 'toyota', 'Volvo' ]


//var targetDisk = [ 'A', 'E','i','0',];
//var newDisk = [];
//var corruptionSymbol = 'i';


    
/*for ( i = 0; i < targetDisk.length; i++) {
        if (targetDisk[i] !== corruptionSymbol){
              newDisk.push(targetDisk[i])
          } 
         console.log(newDisk)
      }*/