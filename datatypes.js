// As the name implies, it refers to the type of our variables
var firstName ="john";
    console.log(firstName);

var age = 36;
    console.log(age);

// Javascript has the Number (with or without decimal), Boolean,
// String, Boolean, Arrays, Objects Data types, undefined and Null
var job;
    console.log(job);

job = ""
//Rules used $, _ , dont use variables names

// type coercion
var firstName ="john";
var age = 36;
    console.log(firstName + " " + age);
var job, isMarried;
job ="teacher";
isMarried = false;
    console.log(firstName + " is a " + age + " year old " + forJob + ". Is he married? " + isMarried);





// We can also add a number to a string
firstname = ""
lastname = "David"
username = firstname
// Js sees this as firstname + "202"
console.log(username)

// We have what we call undefined
// Which means the variable doesn't have a type
// Js is dynamic
// So we mean the value given to the variable is 
// what determines it's type
// If the variable has no value, it has no type and it is undefined

let x // undefined
x = 53 // Number
x = 67.83838 // Number
x = "Hi" // String
x = '' // Empty String
x = true // Boolean
x = false // Boolean
x = [1, 2, 5] // Arrays are treated as object in JS
x = {firstname: "Samuel", lastname:"David"} // Object
console.log(typeof(x))