var removeDuplicates = function (nums) {
  let currentIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[currentIndex] = nums[i];
      currentIndex++;
    }
  }
  return currentIndex;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
