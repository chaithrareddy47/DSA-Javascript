// create a function to check nu,ber is even or not

// we check if num is even or not by using % value if reminder is 0 thn its even else odd


function evenOrOdd(x) {
    if (x % 2 === 0) {
        return "Even Number"
    } else {
        return "Odd NUmber"
    }
}

let evenNum = evenOrOdd(2);
console.log(evenNum);
