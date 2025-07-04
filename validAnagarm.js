var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  if (s === t) {
    return true;
  } else {
    return false;
  }
};

console.log(isAnagram("car", "cat"));
