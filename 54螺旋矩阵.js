/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

 

示例 1：


输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/spiral-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var spiralOrder = function (arr) {
  let result = []
  let direction = ['right', 'down', 'left', 'up'] // 左 下右 上
  let m = arr.length
  let n = arr[0].length
  let directIndex = 0
  let i = 0;
  let j = 0;
  for (let k = 1; k <= m * n; k++) {
    console.log("🚀 ~ file: 54螺旋矩阵.js ~ line 26 ~ spiralOrder ~ arr[i][j]", i, j, arr[i][j], arr, direction[directIndex % 4])

    if (direction[directIndex % 4] === 'right' && (arr[i][j] !== null && arr[i][j] !== undefined)) {

      result.push(arr[i][j])
      arr[i][j] = null
      let tempNum = arr[i][++j]
      if (tempNum === null || tempNum === undefined) {
        directIndex++
        j--
        i++
      }
    } else if (direction[directIndex % 4] === 'down' && (arr[i][j] !== null && arr[i][j] !== undefined)) {
      result.push(arr[i][j])
      arr[i][j] = null
      if (i + 1 === m) {
        directIndex++
        j--
      } else {
        let tempNum = arr[++i][j]
        if (tempNum === null || tempNum === undefined) {
          directIndex++
          i--
          j--
        }
      }
    } else if (direction[directIndex % 4] === 'left' && (arr[i][j] !== null && arr[i][j] !== undefined)) {
      result.push(arr[i][j])
      arr[i][j] = null
      let tempNum = arr[i][--j]
      if (tempNum === null || tempNum === undefined) {
        directIndex++
        j++
        i--
      }
    } else if (direction[directIndex % 4] === 'up' && (arr[i][j] !== null && arr[i][j] !== undefined)) {
      result.push(arr[i][j])
      arr[i][j] = null
      let tempNum = arr[--i][j]
      if (tempNum === null || tempNum === undefined) {
        directIndex++
        i++
        j++
      }
    }
  }
  return result
};
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
])