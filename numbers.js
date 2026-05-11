// // Js has only one type for numbers 
// // that is Number
// // Whether the number is a whole number
// // or a decimal, the type is Number

// let x = 3.142 // decimal
// let y = 10

// console.log(typeof(y))

// // // Add numbers too strings
// let z = 'Hello number ' + 303 // concantenation
// console.log(z)

// // Numeric Strings
// // Are numbers that are strings
// x = '56'
// y = 2

// // With numeric strings, js 
// // treats the strings as numbers 
// // when any other operator apart from
// // + is used
// // + will always mean concatenation

// console.log(x - y)

// // NAN
// //Means Not A Number
// // When we perform numeric operations 
// // on strings, we get NAN
x = 100 / "Apple" 
console.log(x)

// // To check if a variable is not a number
// // We use the isNaN() function

// console.log(isNaN(x))

// // We can use NaN in operations
// console.log(x + 5) 

// // Infinity
// // When a number exceeds the highest 
// // number js can take, the result is inifinity
// // We can also use Infinity in operations
// console.log(2 * Infinity)

// // Hexadecimal (base 16)
// // When writing in hex, we start with
// // 0x to notify js  
// x = 67
// // js prints the decimal version
// // console.log(x)

// // Converting decimal to other bases
// // using .toString() function
// y = x.toString(2)

// // Numbers as object
// x = 575
// y = new Number(x)

// console.log(y)

// // Number Methods

// // toExponential()
// //  1.2e-3 => 1.2 x 10^-3
// // to round up decimals in the fashion 
// // above, we use the toExponential()
// // the output is a string

// x =  9.566
// // we can specify the decimal place
// console.log(x.toExponential())

// //  toFixed()
// //  retuns a string of the number 
// // without decimal
// // parameter represents decimal place
// console.log(x.toFixed(1))

// //toPrecision()
// // you specify the exact decimal place
// console.log(x.toPrecision(5))

// // valueOf()
// // it returns a number
// console.log((10 * 4).valueOf())

// // Converting variables to numbers
// // Number() returns a number
// // parseFloat() returns Decimal
// // pasreInt() returns a whole numbers

// console.log(Number(false))
// console.log(parseInt(24.6))
// console.log(parseFloat(24.67))

// //Number Property
// console.log(Number.MAX_VALUE ) // js largest number
// console.log(Number.MIN_VALUE ) // js smallest number
// console.log(Number.POSITIVE_INFINITY ) // js positive infinity
// console.log(Number.NEGATIVE_INFINITY ) // js negative infinity
// console.log(Number.NaN) // js NaN

// // They allow us know the properties of js Numbers
// // We don't use them in operation
// x = 56
// console.log(x.MAX_VALUE) // gives undefined