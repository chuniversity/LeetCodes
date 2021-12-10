
//too slow
// var plusOne = function(digits, newDigits = [], found = false) {
//   if (found) {
//     console.log(digits, newDigits)
//     return [...digits, ...newDigits]
//   }
//   let last = digits.pop();
//   if(last === undefined) {
//     return [1, ...newDigits]
//   }
//   if (last !== 9) {
//     newDigits.unshift(last + 1)
//     return plusOne(digits, newDigits, true)
//   } else {
//     newDigits.unshift(0)
//     return plusOne(digits, newDigits, false)
//   }
// };

var plusOne = function(digits) {
  let flag = true;
  let result = [];
  let isNines = false;
  for(let i = digits.length -1; i >=0; i--) {
    if(flag) {
      if(digits[i] !== 9) {
        result.unshift(digits[i] + 1);
        flag = false;
      } else if (i !== 0 && digits[i] === 9) {
        result.unshift(0);
      } else {
        isNines = true;
        result.unshift(0);
      }
    } else {
      result.unshift(digits[i])
    }
  }
  if(isNines) {
    result.unshift(1)
  }
  return result;
};


// console.log(plusOne([1,2,3])); // [1,2,4]
// console.log(plusOne([1,2,9])); // [1,3,0]
console.log(plusOne([9,8,7,6,5,4,3,2,1,0])); // [9,8,7,6,5,4,3,2,1,1]

