// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(arr1){
    for(let i=1;i<arr1.length + 1;i++){
        if(!arr1.includes(i)){
            return i
        }
    }
    return -1
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3