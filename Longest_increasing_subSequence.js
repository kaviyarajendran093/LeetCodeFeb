function lengthOfLIS(nums) {
  if (!nums || nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1); // Each number is a subsequence of length 1 by itself

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// Example usage:
const nums = [0, 1, 0, 3, 2, 3];
console.log("Length of Longest Increasing Subsequence:", lengthOfLIS(nums));
