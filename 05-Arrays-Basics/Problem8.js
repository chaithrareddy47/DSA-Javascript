let arr = [90,10,25]
let largest = 0;
let secondLargest = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {

        secondLargest = largest
        largest = arr[i] // here i got first largest 
    
      
    } else if (arr[i] > secondLargest) {
        secondLargest= arr[i]
    }
}

console.log("Largest is "+largest);
console.log("SecondLargest is "+secondLargest);

