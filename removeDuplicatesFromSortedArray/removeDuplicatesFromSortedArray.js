
// doens't work
// var removeDuplicates = function(nums) {
//   let 
//     for (let i = nums.length -1; i >= 0; i--) {
//       if(nums[i] === nums[i - 1]) {
       
//       }  else {
//         nums.unshift(nums[i])
//       }
//     }
//     return nums
// };

// var removeDuplicates = function(nums) {
//   let count = 0;
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] !== nums[i+1]) {
//       nums[count] = nums[i];
//       count++;
//     }
//   }
//   return nums;
// };

// var removeDuplicates = function(nums) {
//   let start = 0     //O(1)
//   for(i=0;i<nums.length;i++){   //O(n)
//       if(nums[i] != nums[i+1]){
//           nums[start] = nums[i]
//           start++
//       }
//   }
//   return start
// };

var removeDuplicates = function(nums) {
  let i = 0;
  while(i < nums.length -1) {
    if(nums[i] === nums[i+1]) {
      nums.splice(i+1,1)
    } else {
      i++
    }
  }
  return nums
  };


// console.log(removeDuplicates([1,1,1,1,2])) // expect [1,2,_]

// console.log(removeDuplicates([1,1,2])) // expect [1,2,_]

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4])) // [0,1,2,3,4,4,_,_,_,_,_]