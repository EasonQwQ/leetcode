/**
 * 
 *请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
数独部分空格内已填入了数字，空白格用 '.' 表示。

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-sudoku
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const is9 = (nums) => {
  const newMap = new Map();
  let countDot = 0;
  let flag = true;
  nums.forEach((v, index) => {
    if (v === '.') {
      countDot++;
    } else if (newMap.get(v)) {
      flag = false;
    } else {
      newMap.set(v, 1);
    }
  });

  return flag && newMap.size + countDot === 9;
};
const checkNums = (board) => {
  let flag = true;
  for (let i = 0; i < 9; ++i) {
    if (!is9(board[i])) {
      flag = false;
    }
  }
  return flag;
};
var isValidSudoku = function (board) {
  if (!checkNums(board)) return false;
  const tempBoard = [];
  for (let i = 0; i < 9; i++) {
    let tempArr = [];
    for (let j = 0; j < 9; j++) {
      tempArr.push(board[j][i]);
    }
    tempBoard.push(tempArr);
  }

  if (!checkNums(tempBoard)) return false;

  tempBoard.forEach((v, index) => {
    tempBoard[index] = [];
  });

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      tempBoard[
        Math.floor((Math.floor(i / 3) * 10 + Math.floor(j / 3) * 3) / 3)
      ].push(board[i][j]);
    }
  }

  if (!checkNums(tempBoard)) return false;
  return true;
};
isValidSudoku([
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
]);
