const describeNum = (n) => {
  if (n === '1') {
    return '11'
  }
  const arr = (n + '').split('')
  let leftIndex = 0;
  let rightIndex = 0;
  let str = '';
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[leftIndex] === arr[rightIndex]) {
      count++
      rightIndex++
    } else {
      leftIndex = i
      rightIndex = i + 1
      str = str + `${count}${arr[i-1]}`
      count = 1
    }

    if (rightIndex === arr.length || (leftIndex == arr.length - 1 && leftIndex === rightIndex)) {
      if ((leftIndex == arr.length - 1 && leftIndex === rightIndex)) {
        count++
      }
      str = str + `${count}${arr[i]}`
    }
  }
  return str

}
var countAndSay = function (n) {
  let arr = ['1']
  for (let i = 1; i < n; i++) {
    arr[i] = describeNum(arr[i - 1])
  }
  return arr[n - 1]
};
countAndSay(5)