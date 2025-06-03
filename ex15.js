// Exercise 15: Write a recursive function `findMax` that takes an array of numbers 
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

function findMax(arrayNumbers){
    if(arrayNumbers.length === 1) return arrayNumbers[0]
    const firstNumber = arrayNumbers[0]
    const maxRest = findMax(arrayNumbers.slice(1))

    return firstNumber > maxRest ? firstNumber : maxRest

}

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9