var twoSum1 = function (numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let comp = target - numbers[i];
    if (map.has(comp)) {
      return [map.get(comp) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
};

var twoSum = function (numbers, target) {
  left = 0;
  right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
};
console.log(twoSum([-1, 0], -1));
