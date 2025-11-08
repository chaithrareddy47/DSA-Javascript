// Reverse a number 

let n = 259;
let lastDigit = 0;
let reverse = 0;

while (n > 0) {
    lastDigit = n % 10;
    reverse = reverse * 10 + lastDigit;
    n = (n-lastDigit)/10
}

console.log(reverse);
