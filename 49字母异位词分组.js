/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。

 

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/group-anagrams
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var groupAnagrams = function (strs) {
  let saveEmpty = []
  let strMap = new Map()
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === '') {
      saveEmpty.push('')
      continue
    }
    const str = strs[i].split('').sort().join('')
    if (strMap.has(str)) {
      const tempArr = strMap.get(str)
      tempArr.push(strs[i])
      strMap.set(str, tempArr)
    } else {
      strMap.set(str, [strs[i]])
    }
  }
  const result = []
  strMap.forEach(v => result.push(v))
  if (saveEmpty.length > 0) result.push(saveEmpty)
  return result
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])