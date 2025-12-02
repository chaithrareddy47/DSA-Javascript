// let arr = [2, 10, 4, 16, 5, 3, 2, 1]

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
        
//     }
// }

// let arr = [4, 2, 10, 8]
// function searchEle(arr, x) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === x) {
//             return i;
            
//         }
//     }
//     return -1;
// }

// let search = searchEle(arr, 3)
// console.log(search);

// let arr = [10, 2, 30, 50, 6]
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
    
// }
// let arr = [10, 20,30]
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum = arr[i] + sum;

    
// }
// console.log(sum);

// let arr = [10, 120, 30, 50, 60]
// let largest = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > largest) {
//         largest=arr[i]
//     }
// }
// console.log(largest);

// let arr = [-1, 2, 3, -4]
// let positive = 0;
// let negative = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0) {
//         positive++;
//     } else if (arr[i] < 0) {
//         negative++;
//     }
// }

// console.log(positive);
// console.log(negative);

// let arr = [90, 10, 25]
// let largest = 0;
// let secondLargest = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest) {
//         secondLargest = arr[i];
//     }
// }

// console.log(largest);
// console.log("second larfest is " + secondLargest);


let arr = [1, 2, 3, 4, 5]
let start = 0;
let end = arr.length - 1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

console.log(arr);

