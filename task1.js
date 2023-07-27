// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const string = "Hello, World!";

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

const result = reverseString(string);
console.log(result);
