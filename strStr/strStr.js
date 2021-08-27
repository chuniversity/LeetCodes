
var strStr1 = function(haystack, needle) {
  if(needle.length === 0) return 0;
  let length = needle.length;
  let index = -1;
  for (let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      let temp = haystack.substring(i, i + length);
      if (temp === needle) {
        return i;
        break
      }
    }
  }
  return index;
};

/* Runtime: 76 ms, faster than 76.08% of JavaScript online submissions for Implement strStr().
Memory Usage: 40.6 MB, less than 34.11% of JavaScript online submissions for Implement strStr().\
*/

// var strStr = function(haystack, needle) {
//   if(needle.length === 0) return 0;
//   let length = needle.length;
//   for (let i = 0; i < haystack.length; i++) {
//     let match = false;
//     if(haystack[i] === needle[0]) {
//       let len = 0;
//       while(len <= length) {
//         if(haystack[i + len] !== needle[len]) {
//           break;
//         }
//         if(len === length - 1) {
//           return i
//         }
//         len++;
//       }
//     }
//   }
//   return -1;
// };



console.log(strStr1('aaa', 'a')) // expect 0
console.log(strStr('hello', 'll')) // expect 2
console.log(strStr('aaaaa', 'bba')) // expect -1