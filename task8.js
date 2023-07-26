// Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const numbers = [1, 2, 3, 4, 5, 6];
function secondSmall(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const secondSmallest = secondSmall(numbers);
console.log("second smallest number:", secondSmallest);
