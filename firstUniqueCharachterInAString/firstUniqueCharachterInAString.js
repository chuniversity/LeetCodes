var firstUniqChar = function(s) {
  for(let i = 0; i < s.length; i++) {
    let found = false;
    for(let j = 0; j < s.length; j++) {
      if(i !== j) {
        if(s[j] === s[i]) {
          found = true;
          break;
        }
      }
    }
    if(!found) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode")); //0
// console.log(firstUniqChar("loveleetcode")); //2
// console.log(firstUniqChar("aabb")); //2
