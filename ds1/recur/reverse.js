function reverseString(str) {
    // Base case: if the string is empty or has only one character, it's already reversed
    if (str.length <= 1) {
        return str;
    }
    
    // Recursively reverse the substring excluding the last character
    return reverseString(str.substring(1)) + str[0];
  }
  
  // Test cases
  console.log(reverseString("hello world")); // Output: "olleh"
  console.log(reverseString("world")); // Output: "dlrow"
  