// A class is a collection of objects

// Objects in js is similiar... it's takes the 
// property name and the property value and groups them
// It groups them using {}

// let car1 = {model: "bmw", color:"black", type:"suv"}
// let car2 = {model: "rangeover", color:"white", type:"suv"}
// let car3 = {model: "glk", color:"red", type:"suv"}
// let car4 = {model: "camry", color:"blue", type:"suv"}

// // console.log('I have a '+ car1.color + 'car of model ' + car1.model + 'and it is an' + car1.type)
// // We can do this easily using a template strings
// console.log(`I have a ${car1.color} car of model ${car1.model} and it is an ${car1.type}`)
// console.log(`I have a ${car2.color} car of model ${car2.model} and it is an ${car2.type}`)
// console.log(`I have a ${car3.color} car of model ${car3.model} and it is an ${car3.type}`)

// Syntax
// class name {
//  constructor(){---}
// }

// class is a keyword, every class must start with the 
// keyword class
// name is the name of the class
// construtor(){--} is where we define the properties of the objects in a class

class Car {
    constructor(model, color, type) {
        this.model = model
        this.color = color
        this.type = type
    }
    intro () {
        console.log(`I have a ${this.color} car of model ${this.model} and it is an ${this.type}`)
    }
}

// // Now let's create objects of this class
// // We use the new keyword
// let car1 = new Car("bmw", "black", "suv")
// let car2 = new Car("rangeover", "white","suv")
let car3 = new Car("GLk", "red", "SUV")
let car4 = new Car("camry", "blue", "SUV")

// // To avoid the repititon we have above, we can introduce 
// // a function in our class that handles the introduction 
// // of our cars... Any function in our class is called a method
// // the syntax is this:
// // name() {}

// // Intro now, we call the intro method with our objects
// car1.intro()
// car2.intro() 
car3.intro()
car4.intro()

// class Car2 {
//     constructor(model, color, type) {
//         this.model = model;
//         this.color = color;
//         this.type = type;
//     }

//     intro() {
//         console.log(`I have a ${this.color} car of model ${this.model} and it is an ${this.type}`);
//     }
// }

// // Creating objects of Car2 class
// let car2 = new Car2("Range Rover", "white", "SUV"); 
// let car3 = new Car2("GLK", "red", "SUV"); 

// // Calling the intro method to print details
// car2.intro();
// car3.intro();


// // simpler version of the class
// const car1 = {
//     color: "red",
//     model: "Toyota",
//     type: "SUV"
//   };
  
//   console.log(`I have a ${car1.color} car of model ${car1.model} and it is an ${car1.type}`);
  