
// what is the name of this operators and their function

// // We have ==, ===, !=, !==, >, <, >=, <=, ?


// These are comparison operators in JavaScript, used to compare values and return a Boolean (true or false). Here's what each one does:

// Equality & Inequality Operators
// == (Loose Equality)

// Compares two values for equality, but allows type conversion (coercion).

// Example:
// console.log(5 == "5"); // true (because "5" is converted to a number)
// console.log(0 == false); // true (because false is converted to 0)
// === (Strict Equality)

// Compares both value and type. No type conversion happens.

// Example:
// console.log(5 === "5"); // false (different types: number vs. string)
// console.log(0 === false); // false (different types)
// != (Loose Inequality)

// Returns true if values are not equal, allowing type conversion.

// Example:
// console.log(5 != "5"); // false (values are considered equal after conversion)
// console.log(0 != false); // false
// !== (Strict Inequality)

// Returns true if values are not equal or their types differ.

// Example:
 console.log(5 !== "5"); // true (because types are different)
// console.log(0 !== false); // true (because types are different)

// Relational (Comparison) Operators
// > (Greater Than)

// Checks if the left operand is greater than the right operand.

// Example:
// console.log(10 > 5); // true
// console.log(3 > 7); // false
// < (Less Than)

// Checks if the left operand is less than the right operand.

// Example:
// console.log(3 < 7); // true
// console.log(10 < 5); // false
// >= (Greater Than or Equal To)

// Checks if the left operand is greater than or equal to the right operand.

// Example:
// console.log(5 >= 5); // true
// console.log(8 >= 3); // true
// console.log(2 >= 6); // false
// <= (Less Than or Equal To)

// Checks if the left operand is less than or equal to the right operand.

// Example:
// console.log(5 <= 5); // true
// console.log(2 <= 6); // true
// console.log(10 <= 5); // false

// Ternary Operator (? :)
// ? : (Ternary Operator)

// A shorthand for an if-else statement.

// Syntax:

// condition ? value_if_true : value_if_false;
// Example:
// let age = 18;
// let filmViewers = age >= 10 ? "You can watch" : "You cannot watch";
// console.log(filmViewers); // "You can watch"



// Summary Table
// Operator	Name	Function
// ==	Loose Equality	Checks value (allows type conversion)
// ===	Strict Equality	Checks both value and type
// !=	Loose Inequality	Checks if values are different (allows type conversion)
// !==	Strict Inequality	Checks if values or types are different
// >	Greater Than	Checks if left value is greater
// <	Less Than	Checks if left value is smaller
// >=	Greater Than or Equal	Checks if left value is greater or equal
// <=	Less Than or Equal	Checks if left value is smaller or equal
// ? :	Ternary Operator	Shorthand for if-else

// Logic operators
// && , Logical AND

// Js provides us with different conditional statements namely:
// if
// if else
// else if
// switch

// if statement
// syntax(language):
// if (condition) {
      //action
// }

hour = 11

if (hour >= 11 ) {
    console.log('The 11th hour miracle has passed')
} else {
    console.log('The 11th hour miracle is still to come')
} 