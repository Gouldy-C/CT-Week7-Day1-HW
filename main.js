// Question #1

// Write a function that takes a string and an array of strings ( in this example dog_names) and checks if one of the list members (dog names) is in the string . Return an array of the dog names found in the array

// Hint : filter, includes
// Resources: Array.prototype.includes() - JavaScript | MDN
// Examples:
var dogNames = ["Max","Fido","Gizmo","Nala"]
//Test Cases
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']
var testString2 = "My Dog is fast, her name is Tippi"
//Expect []
var testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']

function testString(str, arr){
    const res = []
    for(check of arr){
        str.includes(check) ? res.push(check): ''}
    return res
}

console.log(testString(testString1, dogNames))
console.log(testString(testString2, dogNames))
console.log(testString(testString3, dogNames))

//['Max']
//[]
//['Fido', 'Gizmo']




// Question #2

// Write a function using map to convert an array of numbers from inches to feet.

// Example: 
var heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// Expects:
// [ 5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25 ]


function inchToFeet(arrInches){
    const res = arrInches.map(n => n / 12);
    return res
}

console.log(inchToFeet(heightsInInches))

//[5.5, 5.333333333333333, 5, 4.333333333333333, 6, 6.666666666666667, 4.25]


// Question #3

// Using the Ternary Operator and Map, create an array that adds ‘is eating pizza’ to every name from the array ‘tmnt’ that ends with ‘o’ and add ‘is being rude’ to any other name

// Example:
var tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
// Expects:
// [
// 'Leonardo is eating pizza',
// 'Michelangelo is eating pizza',
// 'Donatello is eating pizza',
// 'Raphael is being rude'
// ]

function turtles(names){
    const res = []
    for(nam of names){
        nam.slice(-1) === 'o' ? res.push(`${nam} is eating pizza`) : res.push(`${nam} is being rude`)}
    return res
}

console.log(turtles(tmnt))

//['Leonardo is eating pizza', 'Michelangelo is eating pizza', 'Donatello is eating pizza', 'Raphael is being rude']

// Question #4

// Write an arrow function to find the max number in a list. Do not use the Math.max function. The list will be all positive numbers.

// Example:
var findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
// Expects
/// 234125

const maxNum = nums => {
    let max = nums[0]
    for(n of nums){
        n > max ? max = n : max}
    return max
}

console.log(maxNum(findAMax))

//234125


// Question #5

// At the end of the third iteration ( the third time the loop has ran ) of this ‘For Loop’ define the state of all the variables used in this code block


var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
///define state from this line on the third iteration
}

//bingo value is: "B-I-N-G-O"
//ognib value is: "O-G"
// i value is: 7




// Question #6:

// Comple 3 codewars problems using JavaScript, start with ones you have already solved in python. Paste a link in your .js file to the codewar problem and your solution.


//https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
function sayHello(name) {
    return `Hello, ${name}`
}


//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
function removeExclamationMarks(s) {
    return s.replaceAll('!', '');
}

//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
function stringToArray(string){
    return string.split(' ')
}


