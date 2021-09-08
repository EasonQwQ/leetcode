/**
 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  // numsMap 不重复的数字map key是值 value 是在数组中的下标
  let numsMap = new Map();
  // 重复数字 key是值 value 是重复的次数 从1开始
  let countMap = new Map();
  // 储存结果
  const result = [];

  nums.forEach((value, index) => {
    if (numsMap.get(value) !== undefined) {
      countMap.set(value, countMap.get(value) ? countMap.get(value) + 1 : 1);
    } else {
      numsMap.set(value, index);
    }
  });

  for (let i = 0; i < nums.length; ++i) {
    // 每次计算的时候都把当前值从map中删掉 这样就不会计算本身了
    numsMap.delete(nums[i]);
    // map for((v,k) =>{}) value是上面存储的index ，index才是上面存储的value
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