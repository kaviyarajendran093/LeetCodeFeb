var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let subStr2 = s.substring(i + 1, s.length);
    let subStr1 = s.substring(0, i);
    if (!subStr1.includes(s[i]) && !subStr2.includes(s[i])) return i;
  }
  return -1;
};

console.log(firstUniqChar("aabb"));
