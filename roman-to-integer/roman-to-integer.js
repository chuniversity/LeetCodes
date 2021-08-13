/**
 * @param {string} s
 * @return {number}
 */
const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};


var romanToInt = function(s) {
  let result = 0;
  let prevVal = 0;
  for (let i = s.length-1; i >= 0; i--) {
    if(values[s[i]] >= prevVal) {
      result += values[s[i]];
      prevVal = values[s[i]];
    } else {
      result -= values[s[i]]
    }
  }
  return result   
};