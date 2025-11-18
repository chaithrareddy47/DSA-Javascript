// printing the sum of the arry

let arr = [1, 2, 3, 4, 5]
let sum = 0;


for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];

}
console.log(sum);

let num = 12345;
let summ = 0;
while (num > 0) {
    let lastDigit = num % 10;
    summ = summ + lastDigit;
    num = Math.floor(num / 10);
}
console.log(summ);
