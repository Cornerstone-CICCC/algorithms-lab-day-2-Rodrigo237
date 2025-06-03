// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(arr1){
    const charCount = {}
    let maxCount = 0
    let mostFrequentC = ''

    for (const char of arr1){
        charCount[char] = (charCount[char] || 0) + 1
        if(charCount[char] > maxCount){
            maxCount = charCount[char]
            mostFrequentC = char
        }
    }
    return mostFrequentC
}


console.log(mostFrequentChar("javascript")); // Expected output: "a"
console.log(mostFrequentChar("pineapple"));
console.log(mostFrequentChar("ferrari")); 