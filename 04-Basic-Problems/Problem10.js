// Check if a number is palindrome
let n = 121;
let original = n; // ✅ store original before loop
let lastDigit = 0;
let reverse = 0;

while (n > 0) {
  lastDigit = n % 10; // get last digit
  reverse = reverse * 10 + lastDigit; // build reversed number
  n = (n - lastDigit) / 10; // remove that digit
}

if (original === reverse) {
  console.log("✅ It's a palindrome");
} else {
  console.log("❌ Not a palindrome");
}
