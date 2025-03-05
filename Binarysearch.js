function binarySearch(list, target) {
  let initialPosition = 0;
  let LastPosition = list.length - 1;
  let midPosition = Math.floor((initialPosition + LastPosition) / 2);

  if (target === list[midPosition]) {
    console.log(initialPosition, LastPosition, midPosition);
  } else if (target > list[midPosition]) {
    initialPosition = midPosition;
    midPosition = Math.floor((initialPosition + LastPosition) / 2);
    console.log(initialPosition, LastPosition, midPosition);
  } else if (target < list[midPosition]) {
    LastPosition = midPosition;
    midPosition = Math.floor((initialPosition + LastPosition) / 2);
    console.log(initialPosition, LastPosition, midPosition);
  }

  console.log(initialPosition, LastPosition, midPosition);
}

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

// Example Usage:
let arr = [1, 3, 5, 7, 9, 11, 15];

binarySearchIterative(arr, 9);
