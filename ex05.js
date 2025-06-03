// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(arr1){
    const vowelsArray = new Set(['a','e','i','o','u'])
    let count = 0
    if(arr1.length === 0)
        return 0
    for(const i of arr1.toLowerCase()){
        if(/[a-z]/.test(i) && !vowelsArray.has(i))
            count++
    }
    return count
}

console.log(countConsonants("hello world")); // Expected output: 7