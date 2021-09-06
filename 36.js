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
