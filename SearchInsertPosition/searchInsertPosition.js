// var searchInsert = function(nums, target, idx = Math.round((nums.length - 1) / 2)) {
//     if(nums.length === 1) {
//       if(target > nums[0]) { return 1} else {return 0}
//     }
//     if(nums.length === 2) { 
//       if(target < nums[0]) { return 0 } else if (target > nums[1]) { return 2 }
//     }
//     if(nums[idx] === target || idx === 0) {
//     return idx;
//   } else if (target < nums[idx] && target > nums[idx - 1]) {
//     return idx;
//   } else if (nums.length > 2 && idx === nums.length - 1) {
//     return idx + 1;
//   } else if (target > nums[idx] && target < nums[idx + 1]) {
//     return idx + 1;
//   } else if (target < nums[idx]) {
//     let newIdx = Math.ceil(((idx / 2)));
//     if(newIdx === idx) {newIdx = idx -1}
//     return searchInsert(nums, target, newIdx)
//   } else {
//     let newIdx = Math.floor((((nums.length - 1) + idx) / 2))
//     return searchInsert(nums, target, newIdx)
//   }
// };


var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length -1;
  
  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if(target > nums[left]) {
    return left + 1;
  } else {
    return left
  }
  return (target > nums[left]) ? left + 1 : left
}

/*
Runtime: 86 ms, faster than 11.04% of JavaScript online submissions for Search Insert Position.
Memory Usage: 39.5 MB, less than 91.27% of JavaScript online submissions for Search Insert Position.

*/

// console.log(searchInsert([2,7,8,9,10], 9))

console.log(searchInsert([1,3,5,6,7], 4)) // expect 2

console.log(searchInsert([1,3,5,7], 6))

console.log(searchInsert([1,3,5,7], 8))

console.log(searchInsert([2,3,5,7], 1))

console.log(searchInsert([1], 2))

console.log(searchInsert([1,3], 1))

// console.log(searchInsert([1,3,5,6],5))
