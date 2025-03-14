function maxCandies(candies, k) {
  if (k === 0) return Math.max(...candies); // Edge case (not needed in problem)

  let low = 1,
    high = Math.max(...candies),
    best = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let count = candies.reduce((acc, c) => acc + Math.floor(c / mid), 0);

    if (count >= k) {
      // Can distribute to at least k children
      best = mid; // Store possible max candies per child
      low = mid + 1; // Try for a higher possible value
    } else {
      high = mid - 1; // Reduce search space
    }
  }

  return best;
}
console.log(maxCandies([5, 8, 6], 3));
