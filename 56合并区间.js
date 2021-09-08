/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => (a[0] - b[0]))
  let result = []
  while (intervals.length > 1) {
    let arr1 = intervals.splice(0, 1)[0]
    let arr2 = intervals.splice(0, 1)[0]
    if (arr2[0] > arr1[1]) {
      result.push(arr1)
      intervals.unshift(arr2)
    } else {
      intervals.unshift([Math.min(arr1[0], arr2[0]), Math.max(arr1[1], arr2[1])])
    }
  }
  result.push(intervals[0])
  return result
};
merge([
  [1, 3],
  [3, 6],
  [2, 10],
  [15, 18]
])