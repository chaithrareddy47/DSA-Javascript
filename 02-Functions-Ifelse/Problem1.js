//if-else

// create a function whcih acceps the age and tells wherate a person is eligibale to vote or not
    

function eligibaleToVote(age) {
    if (age >= 18) {
      /*
        console.log() is itself a function, so when I used it, it doesn’t store anything in the variable — the returned value of vote is undefined.
         return didn’t return anything.”
        */
        //   return console.log("Person is eligible to vote");
        return "Person is eligible to vote"
    } else {
        // return console.log("Not eligible to vote");
        return "Not eligible to vote"
        
    }
}

let vote = eligibaleToVote(12)
console.log(vote);


// console.log is just a normal function
// console.log() doesn’t give back any data — it only performs a side-effect (printing).
/*
console.log()	A function that prints → returns undefined
return	Sends data back to where the function was called
return console.log()	Prints something but returns undefined
*/