function removeElemnet(nums, val) {
  if (nums.length < 1) return 0;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    } else {
      left++;
    }
  }
  return left;
}

console.log(removeElemnet([1], 1));
