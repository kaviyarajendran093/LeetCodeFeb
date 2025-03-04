function RemoveElement(nums, val) {
  console.log(nums);
}

//RemoveElement("kaviya", "Raj");

function LinearSearch(list, target) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i;
    }
  }
  return -1;
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function verify(index) {
  if (index !== -1) {
    console.log("Target is found at =>", index);
  } else {
    console.log("Target not found");
  }
}

let result = LinearSearch(number, 2);

verify(result);
