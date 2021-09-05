/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let numsMap = new Map();
  let countMap = new Map();
  const result = [];
  nums.forEach((value, index) => {
    if (numsMap.get(value) !== undefined) {
      countMap.set(value, countMap.get(value) ? countMap.get(value) + 1 : 1);
    } else {
      numsMap.set(value, index);
    }
  });

  for (let i = 0; i < nums.length; ++i) {
    numsMap.delete(nums[i]);
    numsMap.forEach((index, value) => {
      if (numsMap.get(-nums[i] - value) !== undefined) {
        if (-nums[i] - value !== value) {
          result.push([nums[i], value, -nums[i] - value].sort().join(','));
        } else if (countMap.get(value)) {
          result.push([nums[i], value, -nums[i] - value].sort().join(','));
        }
      }
    });
    numsMap.set(nums[i], i);
  }
  const res = Array.from(new Set(result)).map((v) => {
    return v.split(',');
  });
  if (countMap.get(0) > 1) {
    res.push([0, 0, 0]);
  }
  return res;
};
