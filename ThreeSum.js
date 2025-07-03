var threeSum = function (nums) {
  let uniqueArr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          (nums[i] != nums[j] &&
            nums[i] != nums[k] &&
            nums[j] != nums[k] &&
            nums[i] + nums[j] + nums[k] === 0) ||
          (nums[i] === 0 && nums[j] === 0 && nums[k] === 0)
        ) {
          uniqueArr = [[nums[i], nums[j], nums[k]], ...uniqueArr];
        }
      }
    }
  }
  return uniqueArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
