

var removeElement = function(nums, val) {
  let i = 0;
  let result = 0;
  while(i < nums.length) {
    
    if(nums[i] === val) {
      nums.splice(i, 1);
      nums.push('_');
    } else if (nums[i] !== '_') {
      result++; 
      i++;
    } else {
      i++;
    }
  }
  console.log('end', nums)
  return result;
};

// console.log(removeElement([3,2,2,3], 3)) // expect 2

// console.log(removeElement([0,1,2,2,3,0,4,2], 2)) // expect 5

// console.log(removeElement([3], 3)) // expect 0

// console.log(removeElement([3], 1)) // expect 1
// console.log(removeElement([3,2], 1)) // expect 2
// console.log(removeElement([3,2], 2)) // expect 1