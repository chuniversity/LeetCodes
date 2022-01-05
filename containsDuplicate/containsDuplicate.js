// var containsDuplicate = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for(let j = i+1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         return true
//       }
//     }
//   }
//   return false
// };

// var containsDuplicate = function(nums) {
//   let map = {};
//   for(let i =0; i < nums.length; i++) {
//     if(map[nums[i]]) {
//       return true;
//     } else {
//       map[nums[i]] = 1
//     }
//   }
//   return false;
// };

var containsDuplicate = nums => nums.length !== new Set(nums).size



console.log(containsDuplicate([1,2,3,1])) // true

console.log(containsDuplicate([1,2,3,4])) // false
