// plaindrome check
let arr = [10, 20, 30, 40]
let start = 0;
let end = arr.length - 1;
let isPlaindrome = true;

while (start < end) {
    if (arr[start] !== arr[end]) {
        isPlaindrome = false;
        break;
        
        
    } 
    start++;
    end--;
}

if (isPlaindrome) {
    console.log("Its a palindrome");
    
} else {
    console.log("Not a plaindrome");
    
}


