function majorityElement(nums) {
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      myMap.set(nums[i], 1);
    } else {
      if (myMap.has(nums[i])) {
        myMap.set(nums[i], myMap.get(nums[i]) + 1);
      } else {
        myMap.set(nums[i], 1);
      }
    }
  }

  let result;
  let val = 0;
  for (let [key, value] of myMap.entries()) {
    if (value > val) {
      val = value;
      result = key;
    }
  }

  console.log(result);
}

majorityElement([3, 2, 3]);
