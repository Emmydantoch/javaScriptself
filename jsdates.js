// JS DATES
// Js provides a date object for handling dates
// Dates in JS are specified in this order
// year, month, day, hour, minute, seconds, milliseconds

// We use the new Date() to get the date

let today = new Date() // prints out the current date as a string

console.log(today) // Thu Oct 10 2024 12:44:48 GMT+0100 (West Africa Standard Time)

// How to create our own date string
// They are four ways
// new Date () => prints out the current date
// new Date (year, month, day, hour, minute, seconds, miliseconds)
// new Date (year, month, day)
// new Date (year, month)
// new Date (miliseconds)
// new Date (date string)

// In Js we have 11 months, it starts counting from 0
// 0 is January, 1 is February, and so on 

birthday = new Date (2000, 11, 30, 10, 15, 25, 2)

birthday = new Date (2000, 11, 30)

// specifying just the year and month, the day is set to 1
birthday = new Date (2000, 11) 

birthday = new Date (2)

// this is an example of a date string:
// Thu Oct 10 2024 12:44:48

birthday = new Date('December 30, 2000 12:44:48')

// Date.parse
// Converting to a date object
// birthday = Date.parse('December 30, 2000')

console.log(birthday)

// JS GET DATES
// getFullYear() prints year in the format yyyy
// getMonth() prints month from 0 to 11 
// getDate() prints the day as a number (1 - 31)
// getHours() prints out hour from 0 -23
// getMinutes() prints out minutes from 0 - 59
// getSeconds() print out seconds from 0 - 59s
// getMilliseconds()
// getTime() gets time in Month Day, Year 
// getDay() gets the weekday from 0 - 6
// Dates.now()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
console.log(days[birthday.getDay()])

const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(months[birthday.getMonth()])