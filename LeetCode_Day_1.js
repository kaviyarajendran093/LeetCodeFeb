function removeElement(nums, val) {
  if (!nums.length) {
    return "Nums is empty";
  }

  let count = 0,
    i = 0;
  let startDash = -1;

  while (i < nums.length) {
    if (nums[i] !== val) {
      count += 1;
      if (startDash > -1) {
        nums[startDash] = nums[i];
        nums[i] = "_";
        startDash += 1;
      }
    } else {
      if (startDash === -1) {
        startDash = i;
      }
      nums[i] = "_";
    }

    i++;
  }
  return "Total Count = " + count + " ; nums = [" + nums + "]";
}

console.log(removeElement([3, 2, 2, 3], 3));
