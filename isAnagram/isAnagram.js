// too slow

// var isAnagram = function(s, t) {
//   let map = {};
//   for(let i =0; i < s.length; i++) {
//     if(map[s[i]]) map[s[i]]++
//     else map[s[i]] = 1;
//   }
//   for(let i = 0; i < t.length; i++) {
//     if(!map[t[i]]) {
//       return false;
//     } else if(map[t[i]] === 1) {
//       delete map[t[i]];
//     }
//     else {
//       map[t[i]]--;
//     }
//   }
//   return Object.keys(map).length === 0;
// };

// i can't believe this is faster

var isAnagram = function(s, t) {
  return s.split("").sort().join("") == t.split("").sort().join("")
};