// Reallife Objects
// In real life it's simply and item with 
// different properties

// For example a car
// A model.. bmw, toyota, honda, rangeover
// A color..  blue, green, red, black
// type: jeep, bus, suv

// Objects in js is similiar... it's takes the 
// property name and the property value and groups them
// It groups them using {}

let car = {model: "bmw", color:"black", type:"suv"}

// Accessing Object Properties
// objectname.propertyname
console.log(car.model)

// OR
// objectname["propertyname"]
console.log(car["color"])

// Methods
// Methods are the functions that can be performed 
// on an object
// Methods are functions
// When the propertyvalue of an object is a 
// function, it is called a method


const userDetails = {
    firstname: "Assurance",
    lastname: "Ikogwe",
    username: function () {
        return this.firstname + 202
    } 
}
// For methods, the name of the function is removed
// When you want to check the value of username
// now that it is a method
// instead of the traditional 
// objectname.propertyname
// we treat username as a function
// so we say objectname.propertyname()

console.log(userDetails.username())

// this keyword
// this in javascript represents the owner 
// of an object or a function

// new keyword
// This is used to create a js object

x = new String('New Horizons') // declares x as a string object
x = new Number('07017693596') // declares x as a Number object
x = new Boolean(true) // declares x as a boolean object
console.log(x)

// In JS declaring string, number, and boolean 
// as objects is not advisable
// Why? It slows the execution speed 

