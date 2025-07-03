var maxProfit = function (prices) {
  let left = 0; // buy day
  let right = 1; // sell day
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right; // found lower buy price
    }
    right++;
  }

  return maxProfit;
};

//console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var maxProfit1 = function (prices) {
  let maxProfit = 0;
  let minVal = prices[0];
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] >= minVal) {
      profit = prices[i] - minVal;
      maxProfit = Math.max(profit, maxProfit);
    } else {
      minVal = prices[i];
    }
  }
  return maxProfit;
};

console.log(maxProfit1([7, 6, 4, 3, 1]));
