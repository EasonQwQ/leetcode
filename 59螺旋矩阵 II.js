/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
输入：n = 1
输出：[[1]]
 
 * @param {*} n 
 */
var generateMatrix = function (n) {
  let direction = ['right', 'down', 'left', 'up'] // 左 下右 上
  let directIndex = 0
  let arr = Array(n).fill()
  arr.forEach((v, k) => {
    arr[k] = Array(n).fill([])
  })
  let i = 0;
  let j = 0;
  for (let k = 1; k <= n ** 2; k++) {
    if (direction[directIndex % 4] === 'right' && JSON.stringify(arr[i][j]) === '[]') {
      arr[i][j] = k
      if (JSON.stringify(arr[i][++j]) !== '[]') {
        directIndex++
        j--
        i++
      }
    } else if (direction[directIndex % 4] === 'down' && JSON.stringify(arr[i][j]) === '[]') {
      arr[i][j] = k
      if (i + 1 === n) {
        directIndex++
        j--
      } else if (JSON.stringify(arr[++i][j]) !== '[]') {
        directIndex++
        i--
        j--
      }
    } else if (direction[directIndex % 4] === 'left' && JSON.stringify(arr[i][j]) === '[]') {
      arr[i][j] = k
      if (JSON.stringify(arr[i][--j]) !== '[]') {
        directIndex++
        j++
        i--
      }
    } else if (direction[directIndex % 4] === 'up' && JSON.stringify(arr[i][j]) === '[]') {
      arr[i][j] = k
      if (JSON.stringify(arr[--i][j]) !== '[]') {
        directIndex++
        i++
        j++
      }
    }
  }
};
generateMatrix(5)