// Write a JavaScript program to find the most frequent element in an array and return it.
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
function findMostFrequentElement(arr) {
  const frequency = {};
  let mostFrequentElement,
    maxFrequency = 0;

  for (const element of arr) {
    frequency[element] = (frequency[element] || 0) + 1;
    if (frequency[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequency[element];
    }
  }

  return mostFrequentElement;
}

const mostFrequent = findMostFrequentElement(inputArray);
console.log(mostFrequent);
