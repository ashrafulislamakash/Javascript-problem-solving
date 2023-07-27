// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function twoSum(numbers, targetNumbers) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < numbers.length; x++) {
    if (map[numbers[x]] != null) {
      index = map[numbers[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      map[targetNumbers - numbers[x]] = x;
    }
  }
  return indexnum;
}

console.log(twoSum([1, 3, 6, 8, 11, 15], 9));
