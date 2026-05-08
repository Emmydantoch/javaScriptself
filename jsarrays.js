// // Array
// // it is a contiguous collection of 
// // items
// // Arrays and objects are similar
// // but arrays are accessed diferently
// // and we us the []
// // they also do not have propertyname
// // they only hold values

let car = ["bmw", "toyota", "Volvo"]

// // We can create  an array with the
// // new method

car = new Array("Bmw", "Toyota", "Volvo")

// // Accessing array items
// arrayname[itemindex]
console.log(car[2])

// // With this we can add
// // a new item in an array
car[3] = "Saab"

// // We can do this using the push method
// // It adds the item at the back of the 
// // array
car.push('Tortise')

// // holes in array
// // an hole in an array refers to 
// // empty spaces in an array

// // we can change an array element
car[1] = 'Saab'
car[2] = 'Toyota'
car[3] = 'Volvo'
console.log(car)

// // Arrays are type object in js
console.log(typeof(car))

// // The items of arrays can be anything
// // Array of strings, numbers, object,
// // functions, array 

// // Length  Property
// // Length is simply the number of items 
// // in an array

console.log(car.length)

// // Negative index
// console.log(car[car.length-2])

// Looping in array
// For Loop
// A loop is a repeated execution 
// of a task

// for (count; conditionalstatement; increment ) {

// } 

for (let i = 0; i < car.length; i++) {
    console.log(car[i])
}

// // Or 
// // forEach
// // the  parameter must be a function
// car.forEach(printItems)

// function printItems (val) {
//     console.log(val)
// }

// // Array.isArray()
// // checks if a variable is an array
// console.log(Array.isArray(car))

// console.log(car instanceof Array)