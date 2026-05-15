// // Regex stands for Regular Expression

// // What is Regex?
// // A sequence of characters that forms 
// // a search pattern

// // This search pattern is used in strings to search 
// // and replace certain parts of a string

// // The string methods search() and replace is what we
// // use to achieve this

// // Regex is mostly used for form validation
// // Form Validation is the process of ensuring a user
// // enters the correct details in a form

// // this is beacuse the value of every input element in 
// // html is a string

// myInput = document.getElementById('myinput')


// console.log(typeof(myInput)) // prints string


// // Regex Modifiers
// // i - case insensitive (caps or lower)
// // g - global match (find all matches) returns an array of the matches
// // m - multiline matching

// /* To write a regex pattern:

//  /what you are searching for/regexpattern

//  e.g /locate/i

// */

// // match() method
// // returns an object that matches a regex pattern

// text = "I ran a Great race during the rally"
// search = text.match(/great/i)

// console.log(search)

// // Regex Patterns
// // [] signifies a range of character
// // [abc] => find matches that contains a, b and c
// // [0-9] => find matches with digits 0 - 9
// // (x|y) => either the match contains x or y
// another = text.match(/[0-9]/g)
// console.log(another)

// // Regex Meta Characters
// // \d - digit
// // \s - whitespace
// // \b - begining: \bWORD or end: WORD\b

// another = text.match(/\bra/g)
// console.log(another)

// // Quantifiers
// // n+ returns string that contains at least one n
// // n* returns string that contains at least zero or one n

// text = "Helloooooooo World! Hello ya'll"
// another = text.match(/\o+/g)
// console.log(another)

// // test method
// // returns true if there's a match and false if there isn't
pattern = /\d/g
// validation=pattern.test("Helloooooooo World! Hello ya'll77373")
// console.log(validation)

// if(validation) {
//     console.log('Wrong format, letters only')
// }

// //exec() method
// // prints out the index of the string where the match is
validation=pattern.exec("Helloooooooo World! Hello ya'll77373")
console.log(validation)