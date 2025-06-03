// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

function validateEmail(email){

    const arrobasIndex = email.indexOf('@')
    const pointIndex = email.indexOf('.',arrobasIndex)
    if(arrobasIndex < 1 || arrobasIndex !== email.lastIndexOf('@'))
        return false        
    
    if(pointIndex < arrobasIndex + 2 || pointIndex === email.length - 1)
        return false

    return true
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false