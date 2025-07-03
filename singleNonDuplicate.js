var singleNonDuplicate = function (nums) {
  let i = 1;
  while (i < nums.length) {
    if (nums[i - 1] != nums[i]) {
      return nums[i - 1];
    }
    i += 2;
  }
  return nums[i - 1];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
