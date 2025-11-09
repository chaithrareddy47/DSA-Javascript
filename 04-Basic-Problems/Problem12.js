let n = 42;
let product = 1;
let lastDigit = 0;

while (n > 0) {
  lastDigit = n % 10; // get last digit
  product = product * lastDigit; // multiply
  n = (n - lastDigit) / 10; // remove last digit
}

console.log("Product of digits:", product);
