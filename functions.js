// Javascript Function

// A function is a block of code that performs a specific task

// Facts about Functions

// - A function in js must start with the keyword function 
// follwed by it's name then () then {}

// - A function needs to be called befor it to be used, 
// this is what we call invocation
// We call it by it's name follwed by ()

// - A function can have parameters
// Parameter is the value a function receives
// The parameter goes in the ()
// e.g hideText(a)
// e.g hideText(a, b)

// - A function can return a value
// we use the keyword return to return a value

// WHY FUNCTIONS?
// Functions are reusable
// With Functions we can use the same code, just with different inputs

// A simple calculator
// Add, Sub, Multiply, Division

let a = 14
let b = 7


// ES5
// Addition
function add(a, b) {
    c = a + b
    return c // signifies the end of a function
}

// Subtraction
function sub(a, b) {
    c = a - b
    return c
}

// Multiplication
function mul(a, b) {
    c = a * b
    return c
}

// Division
function div(a, b) { 
    c = a / b
    return c
}

console.log(div(1775, 88))

//ES6 function, also called arrow function
// const add = (a, b) => {
//     c = a + b
//     return c // signifies the end of a function
// }

// () => {} // call back functions 
// () => a + b

// Example of call back function in play
/* React.useEffect((a, b) => a + b
) */

// User input through the browser
// We can demand the user input from a browser
input = prompt("What is your name")

console.log(input)



