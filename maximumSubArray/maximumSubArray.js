// var maxSubArray = function(nums) {
//   let highest;
//    for(let i = 0; i < nums.length; i++) {
//     if(!highest) {
//       highest = nums[i];
//     }
//     let temp = 0
//     for(let j = 0; j < nums.length; j++) {
//       temp += nums[j];
//       if(temp > highest) {
//         highest = temp;
//       }
//     }
//    }
//    console.log(highest)
//    return highest;
// };



var maxSubArray2 = function(nums) {
  let highest = nums[0];
  let temp = 0;
  while(nums.length > 0) {
    for (let i = 0; i < nums.length; i++) {
      temp += nums[i];
      if(temp > highest) {
        highest = temp;
      }
    }
    temp = 0;
    nums.shift();
  }
   return highest;
};

/*
Runtime: 311 ms, faster than 5.03% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 39.8 MB, less than 94.81% of JavaScript online submissions for Maximum Subarray.
*/

var maxSubArray3 = function(nums) {
  let highest = nums[0];
  let current = highest;
    for (let i = 1; i < nums.length; i++) {
      current = Math.max(nums[i] + current, nums[i]);
      highest = Math.max(current, highest)
    }
    console.log(highest)
   return highest;
};

/*
Runtime: 127 ms, faster than 16.61% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.3 MB, less than 41.38% of JavaScript online submissions for Maximum Subarray.

*/


var maxSubArray = function(x) {
  let h = x[0];
  let c = h;
    for (let i = 1; i < x.length; i++) {
      c = Math.max(x[i] + c, x[i]);
      h = Math.max(c, h)
    }
   return h;
};

/*
Runtime: 84 ms, faster than 41.54% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.4 MB, less than 41.38% of JavaScript online submissions for Maximum Subarray.
*/




let actual = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
let expected = 6;

let actual2 = maxSubArray([-2,1])
let expected2 = 1;

let actual3 = maxSubArray([1])
let expected3 = 1;


assertEqual = function (actual, expected, testname ) {
  if (actual === expected) {
    return `${testname} passed`
  } else {
    return `${testname} failed`
  }
}

console.log(assertEqual(actual, expected, 'maximumSubarray'))
console.log(assertEqual(actual2, expected2, 'maximumSubarray'))
console.log(assertEqual(actual3, expected3, 'maximumSubarray'))