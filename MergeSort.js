function mergeSort(arr) {
  //Array is sorted if it already contains one or no elements
  if (arr.length <= 1) {
    return arr;
  }

  //Divide array into halves
  const mid = arr.length / 2;
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  //Recursively sort the splitted array
  const sortedRight = mergeSort(leftHalf);
  const sortedLeft = mergeSort(rightHalf);

  //Merge the splitted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let i = 0,
    j = 0;
  let result = [];

  //compare, sorting and merging the 2 halves of the array
  while (left.length > i && right.length > j) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  //merging remaining elements and returing the sorted array
  return result.concat(left.splice(i)).concat(right.splice(j));
}

const arr = [8, 3, 5, 2, 9, 1];
console.log(mergeSort(arr));
