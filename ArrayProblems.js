/*
Brut force approch of O(n2)
function TwoSum(arr, target) {
  let baseIndex = 0;
  let sumIndex = 1;

  while (baseIndex < arr.length - 1) {
    for (let i = sumIndex; i < arr.length; i++) {
      if (arr[baseIndex] + arr[i] === target) {
        return [baseIndex, i];
      }
    }
    baseIndex++;
    sumIndex++;
  }
}
*/
function TwoSum(arr, target) {
  const mapArr = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (mapArr.has(complement)) {
      return [mapArr.get(complement), i];
    }
    mapArr.set(arr[i], i);
  }
  return [];
}

console.log(TwoSum([3, 2, 4], 6));

function removeDuplicates(arr) {
  let index = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[index] = arr[i];
      index++;
    }
  }
  arr.fill("_", index, arr.length);
  const result = "final Array => " + arr + ", Count => " + index;
  return result;
}

//console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//console.log(removeDuplicates([1, 1, 2]));

function removeElements(nums, val) {
  if (!nums.length) return [];

  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    if (nums[left] === val) {
      if (nums[right] !== val) {
        nums[left] = nums[right];
      }
      nums[right] = "_";
      right--;
    } else {
      left++;
    }
  }
  const result = left + 1 + " , " + nums;
  return result;
}

//console.log(removeElements([0, 1, 2, 2, 3, 0, 4, 2], 2));
//console.log(removeElements([3, 2, 2, 3], 3));

function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 4));
