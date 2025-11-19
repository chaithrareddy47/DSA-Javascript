// count positives and negative

let arr = [1, -2, 4, -1,-1,-1]
let positives = 0;
let negative = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
       positives++
    } else if(arr[i]<0){
        negative++
    } else {
        console.log("nothing found");
        
    }
   
}

console.log("positives numbers are "+ positives);
console.log("negative  numbers are " + negative);

