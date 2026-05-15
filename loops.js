// // Loops

// // A Loop in programming is used to repeatedly execute
// // some lines of code.

car = []
car[0] = 'BMW1'
car[1] = 'BMW2'
car[2] = 'BMW3'
car[3] = 'BMW4'

// // Instead of repeated codes as in the above, a loop 
// // will enable us to input each element in one line

// // properties of a loop

// // - A loop has a counter (the variable that keeps count of how 
// // many times the loop has ran)

// // - A loop has a condition (determines when the loop starts
// // and when the loop will end)

// // - A loop has a step (that is incharge of increaing the value 
// // of the counter)

// // For loop
// // Usually used for Array
// // syntax of for loop
// // for (let i = 0; condition, step) {
//     // code to be repeated
// // }

for (let i = 0; i < 4; i++){
    plus1 = i + 1
    car[i] = 'BMW' + plus1
}
console.log(car)

// // For in
// // loops through the properties of an object
// // syntax
// // for (let x in y) {
// //  repeated code
// // }

car = {model: "bmw", color:"black", type:"suv"}
console.log(car.model) // car['model']
// // console.log(car.color)
// // console.log(car.type)

// for (let x in car) {
//     console.log(car[x])
// }

// // forEach
// // it is a method like loop, that takes a function
// // as it's parameter
// // the function it takes in can have 3 parameters
// // => value
// // => index
// // => array 

// const numbers = [45, 4, 9, 16, 25]

// numbers.forEach(myFunction)

// function myFunction (value, index, array) {
//     console.log(array[value])
// }

// // Mechanical Loops
// // The Loops do not provide a way to automatically
// // increase the counter value, the programmer has to 
// // do this by themselves inside the loop body

//while loop
// syntax
// while (condition) {
//     code
//     increment
// }

let i = 0
while (i < 10) {
    console.log('This number ' + i + ' is less than 10')
    i++
}

// // do while loop
// // the difference here is the block comes before the
// // condition, so the block gets executed even if the 
// // condition is false

// // syntax
// // do {
//     // code
//     //increment
// // }
// // while (condition)

// do {
//     console.log('This number ' + i + ' is less than 10')
//     i++
// }
// while (i < 10) 
