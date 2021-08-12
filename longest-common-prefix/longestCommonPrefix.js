

// var longestCommonPrefix = function(strs) {
//   let longest = 0;
//   for (let i = 0; i < strs.length; i ++) {
//     if (strs[i].length > longest) {
//       longest = strs[i].length;
//     }
//   }
//   result = ''
//     let recurse = function (newString, length, count) {
//       if (count === length) {
//         return
//       } else {
//         let temp = [];
//         for (let i = 0; i < newString.length; i++) {
//           temp.push(newString[i][count])
//         }
      
//         let prev = temp[0]
//         for (let i = 0; i < temp.length; i++) {
//           if (temp[i] === prev) {
//           } else {
//             return
//           }
//         }
//         result += prev;
//         count++;
//         recurse(newString, length, count)
//       }
//     }
//   recurse(strs, longest, 0);
//   return result;
// };


var longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if(strs[j][i] !== strs[0][i]) {
        return strs[j].slice(0, i);
      }
    }
  }
  return strs[0]

};

// let strs = ["", ""]
let strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs)) 

console.log((longestCommonPrefix(["flower","flow","flight"]) === "fl"));
console.log((longestCommonPrefix(["dog","racecar","car"]) === ""));
console.log((longestCommonPrefix(["reflower","flow","flight"]) === ""));
console.log((longestCommonPrefix([""]) === ""));
console.log((longestCommonPrefix(["", ""]) === ""));
console.log((longestCommonPrefix(["", "something"]) === ""));
console.log((longestCommonPrefix(["", "flower", "flooze"]) === ""));


