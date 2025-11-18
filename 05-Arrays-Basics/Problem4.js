// print the larfets element in thenarray

let arr = [40, 20, 90];

let largest = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= largest) {
    largest = arr[i];
  }
}
console.log(largest);
