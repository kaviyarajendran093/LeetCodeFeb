var plusOne = function (digits) {
  digits = Number(digits.join("")) + 1;
  return digits.toString().split("").map(Number);
};

//console.log(plusOne([9]));

var plusOne2 = function (digits) {
  let i = digits.length - 1;
  while (i >= 0) {
    digits[i] = digits[i] + 1;
    if (digits[i] > 9) {
      digits[i] = 0;
      i--;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
console.log(
  plusOne2([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
);
