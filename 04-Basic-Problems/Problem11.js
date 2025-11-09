let n = 23456;
let even = 0;
let odd = 0;
let lastDigit = 0;

while (n > 0) {
  lastDigit = n % 10; // get last digit

  if (lastDigit % 2 === 0) {
    // check even
    even++;
  } else {
    // check odd
    odd++;
  }

  n = (n - lastDigit) / 10; // remove last digit
}

console.log("Even digits:", even);
console.log("Odd digits:", odd);
