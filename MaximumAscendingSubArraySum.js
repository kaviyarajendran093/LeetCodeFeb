var maxAscendingSum = function (nums) {
  let sum = nums[0],
    maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1] || nums[i] === nums[i - 1]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
