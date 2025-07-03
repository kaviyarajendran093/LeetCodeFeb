var longestPalindrome = function (s) {
  let charArr = s.split("");
  let longPalindrome = [];
  maxLength = 0;

  if (charArr.length === 1 || !charArr.length) {
    return charArr.join("");
  }

  for (let i = 0; i < charArr.length - 1; i++) {
    for (let j = 0; j < charArr.length; j++) {
      let left = i,
        right = j;
      while (left < right) {
        if (charArr[left] != charArr[right]) {
          break;
        }
        left++;
        right--;
      }
      if (right <= left) {
        let temArr = charArr.slice(i, j + 1);
        if (maxLength < temArr.length) {
          maxLength = temArr.length;
          longPalindrome = [...temArr];
        }
      }
    }
  }

  return longPalindrome.join("");
};

//console.log(longestPalindrome(""));

var longestPalindromeNew = function (s) {
  let maxLength = 0,
    longPalindrome = "";
  if (s.length <= 1) return s;
  for (let l = 0; l < s.length; l++) {
    for (let r = l + 1; r <= s.length; r++) {
      let subStr = s.substring(l, r);
      if (palindromCheck(subStr)) {
        maxLength < subStr.length
          ? ((maxLength = subStr.length), (longPalindrome = subStr))
          : maxLength;
      }
    }
  }
  return longPalindrome;
};
const palindromCheck = (str) => {
  let left = 0,
    right = str.length - 1;
  while (right > left) {
    if (str[left] != str[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

//console.log(longestPalindromeNew("ac"));

function longestPalindromeFinal(s) {
  if (s.length < 2) return s;

  let start = 0,
    end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i); // Odd-length
    let len2 = expandAroundCenter(s, i, i + 1); // Even-length
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindromeFinal("babad"));
