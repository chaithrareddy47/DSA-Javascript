let arr = [-90, 10, 25];
let smallest = 0;
let secondSmallest = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    secondSmallest = smallest;
    smallest = arr[i]; // here i got first largest
  } else if (arr[i] < secondSmallest) {
    secondSmallest = arr[i];
  }secondSmallest
}

console.log("Largest is " + smallest);
console.log("SecondLargest is " + secondSmallest);
