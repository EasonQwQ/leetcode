/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
输入：n = 1
输出：[[1]]
 
 * @param {*} n 
 */
var generateMatrix = function (n) {
  let direction = 'left'
  let arr = Array(n).fill([])
  console.log("🚀 ~ file: 59螺旋矩阵 II.js ~ line 14 ~ generateMatrix ~ arr", arr)
  for (let i = 1; i <= n ** 2; i++) {
    let i = 0;
    let j = 0;
    if (direction === 'left') {

    }
  }
};
generateMatrix(3)