var climbStairs = function (n) {
  //ways(n)=ways(n−1)+ways(n−2)
  if (n <= 2) return n;

  let first = 1,
    second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
};

console.log(climbStairs(4));
