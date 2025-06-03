// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(word){
    return word
    .split(/_|\s+/)
    .map((char,index) => index === 0 ? char.toLowerCase() : char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
    .join('')
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"