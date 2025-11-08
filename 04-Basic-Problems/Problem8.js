// sum of digits 
let n = 259;
let sum = 0;
let lastDigit;
while (n > 0) {
    lastDigit = n % 10;
    sum = sum + lastDigit;
    n = (n-lastDigit)/10;
}
console.log(sum);
