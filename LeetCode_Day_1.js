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

//console.log(removeElement([3, 2, 2, 3], 3));

function removeElementByTwoPointer(nums, val) {
  let i = 0,
    j = nums.length - 1;
  while (j >= i) {
    if (nums[i] === val) {
      if (nums[j] === val) {
        nums[j] = "_";
        j--;
      } else {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        nums[j] = "_";
        i++;
        j--;
      }
    } else {
      i++;
    }
  }

  return i + ", nums = [" + nums + "]";
}

//Leetcode solution
function removeElement(nums, val) {
  let index = 0; // Pointer to track position for valid elements

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i]; // Move valid elements forward
      index++;
    }
  }

  return index; // Returns count of elements not equal to val
}

console.log(removeElementByTwoPointer([0, 1, 2, 2, 3, 0, 4, 2], 2));

//console.log(removeElementByTwoPointer([3, 2, 2, 3], 3));
