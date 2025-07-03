var twoSum = function (nums, target) {
  let i = 0;
  let j = 1;
  while (i < nums.length - 1) {
    for (k = j; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
      j++;
      i++;
    }
  }
  return [0, 0];
};

var twoSum2 = function (numbers, target) {
  left = 0;
  right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
};

console.log(twoSum2([0, 0, 3, 4], 0));

var lengthOfLongestSubstring = function (s) {
  let temArr = [];
  let charArr = s.split("");
  let count = 0,
    maxCount = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (temArr.includes(charArr[i])) {
      temArr.splice(0, temArr.indexOf(charArr[i]) + 1);
      if (maxCount < count) {
        maxCount = count;
      }
      temArr.push(charArr[i]);
      count = temArr.length;
    } else {
      temArr.push(charArr[i]);
      count += 1;
    }
  }
  if (maxCount < count) {
    maxCount = count;
  }
  return maxCount;
};

//console.log(lengthOfLongestSubstring("dvdf"));

function lengthOfLongestSubstring1(s) {
  const seen = {};
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen[char] !== undefined && seen[char] >= start) {
      start = seen[char] + 1;
    } else {
      maxLen = Math.max(maxLen, i - start + 1);
    }

    seen[char] = i;
  }

  return maxLen;
}

function lengthOfLongestSubstring2(s) {
  let seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

function lengthOfLongestSubstringNew(s) {
  let temArr = "";
  maxLegth = 0;
  for (let i = 0; i < s.length; i++) {
    if (temArr.includes(s[i])) {
      firstOccurance = temArr.indexOf(s[i]);
      temArr = temArr.replace(temArr.substring(0, firstOccurance + 1), "");
      temArr = temArr + s[i];
    } else {
      temArr = temArr + s[i];
    }
    maxLegth = Math.max(maxLegth, temArr.length);
  }

  return maxLegth;
}

//console.log(lengthOfLongestSubstringNew("dvdf"));

function TwoAdd(nums, target) {}
