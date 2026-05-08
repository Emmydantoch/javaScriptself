// What is an operator?
// It's what allows an operation to be performed

3 + 5 // addition operation

// + => addition operator
// = => assignment operators

x = 2 + 5
// x is assigned to the value of 2 + 5

// * => Multiplication
// - => Subtraction

// Types of operator

// Arithmetic Operators

// There are operators that are used to perform 
// our basic arithmetic

//+ => addition operator 
3 + 5

// * => Multiplication
3 * 5

// - => Subtraction
3 - 5 

// / => Division
3 / 5

// ++ => Increment, adding 1
x = 3
x++
z = x
console.log(z)

// -- => Decrement, subtracting 1
x = 3
x--
y = x
console.log(y)

// % => Modulus, gives the remainder after division
x =  20 % 3
console.log(x)

// // ** Exponentiaton
x = 5 ** 2 // 25
console.log(x)

// // we can use the Math.pow() function instead of 
// // exponentiation

console.log(Math.pow(5, 2))

// // Operator Precedence
// // the order of operators
// x = 100 + 50 * 3  // 50 * 3, + 100
// console.log(x) 

// // Assignment Operators

// // = => assignment operators
// x = 2 + 5
// // x is assigned to the value of 2 + 5

// // += => adds a value to the variable
x = 2
x += 5
console.log(x)

// // -= => subtracts a value from the variable
x = 2
x -= 5
console.log(x)

// // we also have /=, *=, %=
x = 5
x %= 3
console.log(x)

// // Exponential **=
x = 2
x **= 3
console.log(x)

// // Comparison Operators
// // We have ==, ===, !=, !==, >, <, >=, <=, ?

// // == they are equal, returns either true or false
x = 5, y = 4
console.log(x == y)

// // === strict equality, checks if the value and the type are equal

// // != not equal
console.log(x != y)

console.log(x !== 5)

// // !== strict version

// // > greater than
// // < less than
// // >= greater or equal
// // <= less than or equal

// // ? tenaray operator is the short version of the if else
if (x >= 5) {
    console.log('yes')
    console.log('It is')
} else {
    console.log('no')
}

x >= 5 ? console.log('yes') : console.log('no')

// // Logical Operators, used for testing 
// // and comparison of two or more expressions

// // && , Logical AND
// // if expr1 is true and expr2 is true returns true
// // but if one of them is false, it will return false

x = '5', y = 10, z = 105, k = 22

expr1 = x > y // false
expr2 = z > k // true

//console.log(expr1 && expr2)


// // ||, Logical OR
// // if expr1 at least one is true, it returns true
//console.log(expr1 || expr2)

// // !, Logical NOT
// // it negates the expression
//console.log(!expr1)

// // Type Operators
// // Helps us check the type of a variable or object

// // typeof operator, returns the type of a variable
// console.log(typeof(expr1)) 

// //instanceof, returns the instance of an object

// // Bitwise Operators
// // They are used for operations on binary, and js uses 32bits
// // 0 or 1.. 
// // bits is bINARY DIGits 
// // 2 in binary is 10
// // js sees it as 00000000000000000000000000000010

// // Lets look at the operators
// // & AND
// // We enter the digits in base 10: 1, 2, 3, 4,...
// // But Javascript converts it to binary, works on it 
// // and converts it back to base10
//console.log(3 & 3) // 2
// // 2 in binary is 10
// // 3 in binary is 11
// // 10 & 11 => 10 (2 in base10)

// // | OR
// // ~ NOT
console.log(6 | 7)
// // ^ XOR
// // << Zero fill left shift
// // >> Signed right shift
// // >> Zero fill right shift 

// // String Operations
// // We can add a string to a string, 
// // we call it concatenation

firstname = "Assurance"
lastname = "Ikogwe"
fullname= firstname + ' ' + lastname
console.log(fullname)

// // We can also add a number to a string
/*firstname = "Assurance"
lastname = "Ikogwe"
username = firstname +  202
console.log(username)*/