/* COUNT FREQUENCY 
 ⭐ What does “count frequency” mean?

Frequency = how many times something appears.

That’s it.

If someone says:

Count the frequency of elements in an array

It means:

👉 For every number in the array,
👉 Count how many times it occurs,
👉 And show the result
*/

let arr = [1, 2, 1, 3, 4, 2, 1]

for (let i = 0; i < arr.length; i++){
    let count = 0;
    for (let j = 0; j < arr.length; j++){
        if (arr[i] === arr[j]) {
            count++
        }
        
    }

    console.log(`${arr[i]} appeard ${count} times`);
    
    
}