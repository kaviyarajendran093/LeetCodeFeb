var intersection = function (nums1, nums2) {
  let datalength = nums1.length > nums2.length ? nums1.length : nums2.length;
  let result = [];
  for (let i = 0; i < datalength; i++) {
    if (nums1.indexOf(nums2[i]) !== -1) {
      result.push(nums2[i]);
    }
  }
  return [...new Set(result)];
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
