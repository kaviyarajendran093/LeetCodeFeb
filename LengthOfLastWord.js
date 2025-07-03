function lengthOfLastWord(s) {
  let lastLen = 0;
  let isSpace = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] != " ") {
      if (!isSpace) {
        lastLen = 1;
        isSpace = true;
      } else {
        lastLen += 1;
      }
    } else {
      isSpace = false;
    }
  }

  return lastLen;
}

//console.log(lengthOfLastWord("luffy is still joyboy"));

function lengthOfLastWord2(s) {
  let strTrim = s.trim();
  let strArr = strTrim.split(" ");
  return strArr[strArr.length - 1].length;
}
console.log(lengthOfLastWord2("   fly me   to   the moon  "));
