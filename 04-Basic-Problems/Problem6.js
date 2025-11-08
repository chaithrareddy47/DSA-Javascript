/*
❌ My logic attempt:

I wrote:
(year % 4 == 0 && year % 400 == 0) || (year % 100 !== 0)

My idea:
- I wanted to check if the year is divisible by 4 and 400,
  or if it is not divisible by 100.

But the order is wrong ❌

👉 Problem:
- When I write (year % 100 !== 0) separately with OR (||),
  any year that is not divisible by 100 (like 2019, 2021) 
  becomes true — even if it’s not divisible by 4!
  So it prints “leap” for non-leap years.

✅ Correct logic:
(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)

Explanation:
- Year must be divisible by 4
- But NOT divisible by 100
- Unless it’s divisible by 400 (for century years like 2000)

So the correct order of checking should be:
  1. Check divisible by 4
  2. Then check not divisible by 100
  3. Then OR divisible by 400

Simple rule: 4 ✅, 100 ❌, 400 ✅
*/
let year = 1900;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log(year + " is a leap year");
    
} else {
    console.log(year + " is not a leap year");
    
}