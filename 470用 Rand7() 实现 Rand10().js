/**
 * 
 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。

不要使用系统的 Math.random() 方法。

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-rand10-using-rand7
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
const rand7 = () => {
  return Math.floor(Math.random() * 7) + 1;
};
const rand10 = () => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += rand7();
  }
  return (sum % 10) + 1;
};
rand10();
