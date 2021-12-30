
//too slow
// var twoSum = function(numbers, target) {
//   for(let i = 0; i < numbers.length; i++) {
//     for(let j = i+1; j < numbers.length; j++) {
//       if(numbers[i] + numbers[j] === target) {
//         return([i+1, j+1]);
//         break;
//       }
//     }
//   }
//   return []  
// };

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length-1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if(sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum([0,0,3,4], 0)) // [1,2]
console.log(twoSum([2,7,11,15], 9)) // [1,2]
console.log(twoSum([2,3,4], 6)) // [1,3]
console.log(twoSum([-1,0], -1)) // [1,2]



