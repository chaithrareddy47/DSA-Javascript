let arr = [10, 20, 30, 40];

let start = 0;
let end = arr.length - 1;

while (start < end) {
  // swap arr[start] and arr[end]
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  // move pointers inwardo
  start++;
  end--;
}

console.log(arr);
