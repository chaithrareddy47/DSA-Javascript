// Array declaration
/*
 - 2 ways of declaring the arrays
 - arrays can store any data type
 - its an zero based index 


*/

// 2ways of declaring
// let arr = []

// let newArr = new Array();

// adding values
// let person = {
//     name: 'abc',
//     age:20
// }

// let arr1 = ['apple', 'mango', 'banana', person]
// console.log(arr1[0]);
// console.log(arr1[3]);
// console.log(arr1[3].name);

// to know length of the array
// console.log(arr1.length);

// while accessing it goes from 0 based index
// but while we nned to know the legth it startsfrom 1

// Array methods - add n remove

// PUSH - POP (add or remove at the end of the array)
// SHIFT - UNSHIFT (add or remove at the begining of teh array)


// let arr = [1, 2, 3, 4, 5]

// console.log(arr.push(6));
// console.log(arr.pop());


// console.log(arr.unshift(0)); // adds
// console.log(arr.shift());

// console.log(arr);


// looping in array

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++){
    console.log(i); 
}

let i = 0; //initialization
while (i < arr.length) {
    console.log(i);
    
    i++;
}


// inbuilt loops in js 
// MAP
const numbers = [1, 2, 3, 4, 5, 6, 7]
numbers.map((item) => {
    console.log(item)
})

//filter - retuns the boolean value whn condition istrue
const num = [1, 2, 3, 4, 5, 6, 7];
num.filter((num => {
    console.log(num>5); 
}))


// question 1 - second largest number


