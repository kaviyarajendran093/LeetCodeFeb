//binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4);

function binarySearchIterative(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target, return index
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
      console.log("when target is greater", mid, left);
    } else {
      right = mid - 1; // Search in the left half
      console.log("when target is smaller", mid, right);
    }
  }

  return -1; // Target not found
}

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // Base case: target not found

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Found the target, return index
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right); // Search right half
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1); // Search left half
  }
}

function binarySearchPractice(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    midInd = Math.floor((left + right) / 2);

    if (target === arr[midInd]) {
      return midInd;
      return;
    } else if (target < arr[midInd]) {
      right = midInd - 1;
    } else {
      left = midInd + 1;
    }
  }
  return -1;
}

// Example Usage:
let arr = [1, 3, 5, 7, 9, 11, 15];

//binarySearchIterative(arr, 9);
binarySearchPractice(arr, 7);
//console.log(binarySearchRecursive(arr, 9));
