function RomanToInteger(s) {
  var roman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = s.length - 1; i >= 0; i -= 2) {
    if (i - 1 < 0) {
      result = result + roman.get(s[i]);
    } else if (
      roman.get(s[i]) < roman.get(s[i - 1]) ||
      roman.get(s[i]) === roman.get(s[i - 1])
    ) {
      result = result + (roman.get(s[i]) + roman.get(s[i - 1]));
    } else if (roman.get(s[i]) > roman.get(s[i - 1])) {
      result = result + (roman.get(s[i]) - roman.get(s[i - 1]));
    }
  }
  return result;
}

//console.log(RomanToInteger("MCMXCIV"));

function RomanToInt(s) {
  var roman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let currentVal = roman.get(s[i]);
    let nextVal = roman.get(s[i + 1]);

    if (currentVal < nextVal) {
      result += nextVal - currentVal;
      i++;
    } else {
      result += currentVal;
    }
  }
  return result;
}
console.log(RomanToInt("LVIII"));
