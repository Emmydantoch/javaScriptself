// Js strings are used for storing 
// and manipulating text
// They appear in single ('') or double quotes("")

let text = "New Horizons"

// String Length 
// there is a built-in function know as length() 
// for checking the length of a string
// it counts the spacing in the string as well

console.log(text.length)

// Escape characters
let text2 = "New Horizons\t Bus is at the station"
// New Horizons' Bus is at the station

console.log(text2)

// Other escape characters
/*
\b => backspace
\f => Form Feed
\n => New Line
\r => Carriage Return
\t => Horizontal Tab
\v => Vertical Tab

*/

// Strings can be objects
x = new String ('Abba')

// String Methods
// length() is a string method that gives
// the length of a string
let text3 = "New Horizons"
console.log(text3.length)

// EXtracting the parts of a string
// There are 3 methods that allows us do this
// - slice()
// - substring()
// - substr()

// The Slice Method
// extracts part of the string, and returns 
// the extracted part
let fullname = "Assurance Ikogwe"
// I want just the lastname 

// slice(start, end)
// js starts from 0 in counting
// start means the starting index
// end means the ending index
// JS ignores the element of the ending index

lastname =  fullname.slice(10, 16)

console.log(lastname)

// Exercise
// Extract firstname using positive amd negative

// Using Negative
// we can have just a starting value 
// if we've exceeded the numbers
lastname =  fullname.slice( -16, -7 )
console.log(lastname)

// substring()
// this is just like the slice but it doesn't 
// take negatives
lastname =  fullname.substring(9, 16)
console.log(lastname)

//substr()
// it's similar to the slice in the sense that:
// start means the starting index
// but
// end means the length of the extracted string
fullname = "Assurance Ikogwedffgff"
lastname = fullname.substr(0,9) 
console.log(lastname)
// Can also take negative

// Replacing string content
// We use the replace() method

text = "Noow Noow Horizons"

// We want to replace Noow with New
// first "" => What do you want to replace
// second "" => With what?
correct = text.replace("Noow", "New")

console.log(correct)

// Converting to upper and lowercase
console.log(correct.toUpperCase()) // converts to upper case
console.log(correct.toLowerCase()) // converts to upper case

// Exercise 1
// Extract firstname using positive and negative
// Exercise 2
// Number 5 under task 2 of the Algorithm challenge
input = "Mr John Smith"
correct = input.replace(" ", "%20") //Mr%20John Smith
correct = correct.replace(" ", "%20")
console.log(correct)

// concat() Method
// it joins two strings together
let t1 = "New"
let t2 = "Horizons"
// concat takes in two parameters
// the first is what should seperate them
// the second is the other string
let name = t1.concat(" " , t2)
console.log(name)

// trim() function
// It removes the sapce at the beginning of a string
name = " New Horizons"
console.log(name.trim())

// string padding
// adding 0 to the beginning or end of a string
//padStart, padEnd
text = "5"
console.log(text.padStart(20, 0))
console.log(text.padEnd(6, 0))

charAt() //Method
//it returns the character in a string of the specified index
input = "Mr John Smith"
console.log(input.charAt(8))

//Converting string to arrays
// [1, 2, 3, 4]
// An array is a contiguous collection of items
// We use the split function 
input = "Mr,John,Smith"
array = input.split() // prints the entire string as an array
// We can determine how they will seperated
array = input.split(",")
console.log(array) 

// String Search
// We can search for the characters in a string
// using these methods
// .indexof() // gives index of the search string
// .lastIndexOf()
//.search()
// .startsWith()
// .endsWith()

//.indexof()
text = "Try and locate me"
console.log(text.indexOf("locate")) // starts 0
console.log(text.indexOf("locate", 7)) // starts 7

.lastindex()
// // it's used when we have repititons, 
// // it gets the starting index of the last match
text = "Try and locate me no locate me"
console.log(text.lastIndexOf("biscuit"))

// indexOf and lastIndexOf returns -1 if the string
// is not found

// both can take in a second paramenter that determines
// where the search should start from

//.search() method is just like indexOf
console.log(text.search("locate"))
// does not allow a second parameter

// .startsWith() 
// .endsWith()
// they return a boolean value
console.log(text.startsWith("Trying"))

// it takes a second parameter that counts
text = "ooh Hey ooh Hey ooh"
console.log(text.startsWith("Hey", 3))

