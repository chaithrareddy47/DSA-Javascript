// liner search

let arr = [10, 20, 40, 1]
function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === x) {
            return `element found is ${arr[i]}`
        } else {
            console.log("not found");
            
        }

    }
    return "not found";
}

let search = linearSearch(arr, 1);
console.log(search);
