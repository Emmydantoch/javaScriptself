/* Syntax and Semantics

Syntax is rules of the language

Semantic is the words in that language

Variables

A variable is a container for storing values

Properties of a variable
Name 

Value

Data type: number (integer, float), 
string, character(a-z, 0-9, special characters (!, $^&)),
boolean (true, false)

Scope: where is the variable accessible, variables can be of
local scope: only accessible within the block it is declared
global scope: accessible anywhere
Note: using var gives the variable a global scope

Variables must be declared
In js we declare variables using 
three key words namely: let, const, var

let => values can change but is restricted to a block
var => values can change and it is not restricted to a block
const => values cannot change and it is restricted to a block

*/

// (Name, Value, Data type, scope)

// let x = 5 // x, 5, integer, global

// var y = "Philip" // y, Philip, String, global

// Constant Variable
// These are variables whose value cannot be changed 
// const z = 0.55 // z, 0.55, float

// k = 8 // js allows to use variables without declaring

// x = 6 // change the value of your variable


// console.log(x) // displays x
// console.log(y) // displays y
// console.log(z) // displays z
// console.log(k) // displays k

//this is a block
if (x = 6) { //starts block
    let a = 8
    const b = "Emmanuel"
    var c = "E"
    console.log(a) // displays a
    console.log(b) // displays b
    console.log(c) // displays c
} // ends the block

console.log(a) // displays a
console.log(b) // displays b
console.log(c) // displays c