// Count didgis in a number
// let n = 259;

// let count = 0;

// while (n > 0) {
//     n=  n % 10;
   
//     // You used n % 2 == 0;
// // → That’s checking if n is even, but not actually reducing the number.
// // So your n never changes 😅
//     count++
// }
// console.log(count);

let n = 1234567382973653;
let count = 0;
while (n > 0) {
    n = (n - (n % 10)) / 10;
    count++;
}
console.log(count);

