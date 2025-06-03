// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(word){
    return word
    .split(' ')
    .map(char => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
    .join(' ')
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"