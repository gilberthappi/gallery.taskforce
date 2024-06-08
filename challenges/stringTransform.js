function transformString(str) {
    const len = str.length;

    if (len % 15 === 0) {
        // If length is divisible by 15, first reverse the string then replace each character with its ASCII code
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return str.split('').reverse().join('');
    } else if (len % 5 === 0) {
      
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If length is not divisible by 3, 5, or 15, return the original string
        return str;
    }
}

// Example usage:

console.log(transformString("Hamburger")); 
// Output: "regrubmaH"
console.log(transformString("Pizza")); 
// Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); 
// Output: "eikooCpihCetalocohC"
