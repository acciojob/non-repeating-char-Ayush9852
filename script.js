function firstNonRepeatedChar(str) {
  // Create an object to store character frequencies
    const charFrequency = {};

    // Iterate through the string to populate character frequencies
    for (let char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charFrequency[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // If all characters are repeated, return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
