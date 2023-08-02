/*
Task 2 :- Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.
*/
const prompt = require('prompt-sync')()


/* Taking values of array from user*/
const a = (prompt("Enter the number :-  "))
let arr = []
console.log(typeof a)

for (i = 0; i < a; i++) {
    var ax = Number(prompt("Enter the number :-  "))
    arr.push((ax))

}

//  arr = [1,2,3,4,5]   // Can use this line for demo 

console.log("the sum is :- ", arrsum(arr))



function arrsum(arr) {
    let z = 0
    arr.forEach(ele => z += (ele))
    return z

}

