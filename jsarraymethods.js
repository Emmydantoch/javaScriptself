// // Converting Arrays to Strings
// // We use the toString Method

// let car = ["bmw", "toyota", "Volvo"]
// console.log(car.toString())

// //join()
// // converts to string, but now we 
// // get to specify what seperates the strings
// console.log(car.join(', '))

// // Pushing Popping
// // while .push() adds the item to 
// // the back of the arrays
// // .pop deletes the item at the back 
// // of the array
// car.push('Tortise') // adds Tortise to the back
// car.pop() // remove the last item of the array
// console.log(car)

// //shift()
// // removes the first item
// car.shift()
// car.shift()
// for (let i = 0; i < car.lngth; i++) {
//     console.log(car[i])
// }

// console.log(car.length)



// //unshift()
// // adds an item at the beginning
// car.unshift('bmw', 'toyota')
// console.log(car)

// splice(x, y)
// // x where should the items be added
// //y how many items should be deleted
// car = ["bmw", "toyota", "Volvo"]

// // // // add Tortise, remove bmw
// car.splice(2, 2, 'Tortise')
// console.log(car)

// // Algorithm challenge

// // The challenge states:

// // Instructions

// // Copy the uncorrupted data in the 
// // array stored in targetDisk to the 
// // empty array newDisk (corrupted data 
// // looks like this: ø). 
// // Then print the contents of the 
// // disk to the terminal as a string.
// var targetDisk = [ 'A', 'E','i','0',];
// targetDisk.splice(1,2)
// console.log(targetDisk)
// var newDisk = [];
// var corruptionSymbol = 'i';


    
// for ( i = 0; i < targetDisk.length; i++) {
//         if (targetDisk[i] !== corruptionSymbol){
//              newDisk.push(targetDisk[i])
//          } 
//         console.log(newDisk)
    //  }

// newDisk.push(targetDisk[0])
// newDisk.push(targetDisk[2])
// newDisk.push(targetDisk[3])

 

// // Deleting Elements
// // we use the delete keyword
// // using this however leaves holes in our array
// // so it is advised to use the pop()
// car = ["bmw", "toyota", "Volvo"]
// delete car[0]
// console.log(car)

// let numbers= [1, 2, 3, 4, 5, 6, 7]

// let evenNo = numbers.filter((val) => {
//     return val % 2 == 0
// })
// let oddNo = numbers.filter((val) => {
//     return val % 2 !== 0
// })

// // let children = boyChild.concat(girlChild, adopted)
// // children = children.concat("Moses")


// //  console.log(children)

// // // slice()
// // // creates a new array
// // // the source array  does  not change
// // // slice(x, y)
// // // x => starting index, by default it is 0
// // // y => ending index, the element at the ending index
// // // is ignored, by default it is the length

// car = ["bmw", "toyota", "Volvo",]
// newcar = car.slice(0, 2,) 

// // console.log(car)
// console.log(newcar)


// // // # Exercise
// // // # You create an array
// // # lets say [1, 2, 3, 4, 5, 6, 7]
// // # odd = [1, 3, 5, 7] = 16
// // # even = [2, 4, 6] = 12
// // # sum = [12, 16]

// // // # Hint: You can use for loops to get the sum of 
// // // # the even and odd numbers 

// let numbers= [1, 2, 3, 4, 5, 6, 7]
// let evenNo = numbers.filter((val) => {
//     return val % 2 == 0
// })
// let oddNo = numbers.filter((val) => {
//     return val % 2 !== 0
// })

// // // We have gotten our even and odd numbers
// for (let i = 0; i < numbers.length; i++){
//     // when you divide an even no by 2
//     // we get 0 as the reminder
//     if(numbers[i] % 2 == 0 ) {
//         evenNo.push(numbers[i]) 
//     } else {
//         oddNo.push(numbers[i])
//     }
// }

// console.log(evenNo)
// console.log(oddNo)

// // // Add evenNo
// var sumEven =  evenNo.reduce((total, val) => {
//     return total + val
// })

// // // Add OddNo
// var oddSum = oddNo.reduce((total, val) => {
//     return total + val
// })

// console.log(oddSum)
// console.log(sumEven)

// let totalSum = []
// totalSum.push(sumEven)
// totalSum.push(oddSum)

// console.log(totalSum)