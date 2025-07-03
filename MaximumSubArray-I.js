var findMaxAverage = function (nums, k) {
  if (nums.length === 1) {
    return nums[0];
  }

  let right = 0,
    left = k - 1;
  let sumAvg = 0;

  // Calculate initial sum for the first window
  for (let i = 0; i <= left; i++) {
    sumAvg += nums[i];
  }

  let maxAvg = sumAvg / k;

  // Slide the window
  while (left < nums.length - 1) {
    sumAvg = sumAvg - nums[right] + nums[left + 1];
    right++;
    left++;
    maxAvg = Math.max(maxAvg, sumAvg / k);
  }

  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));

var findMaxAverage1 = function (nums, k) {
  let maxAvg = 0;
  let initVal = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  maxAvg = sum / k;

  for (let j = k; j < nums.length; j++) {
    sum -= nums[initVal];
    sum += nums[j];
    maxAvg = Math.max(maxAvg, sum / k);
    initVal++;
  }
  return maxAvg;
};
