// Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumPositive = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; ++i) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
};

const result = sumPositive([2, -5, 10, -3, 7]);

console.log(result);
