// iterate over array
 // if (store[i])
  // delete store[i]
 // else store[i] === 1
// return Object.keys(store)




var singleNumber = function(nums) {
    let store = {};
    for(let i = 0; i < nums.length; i++) {
      if(store[nums[i]]) {
        delete store[nums[i]];
      } else {
        store[nums[i]] = 1;
      }
    }  
    return Object.keys(store)[0];
};


console.log(singleNumber([2,2,1])) // 1

console.log(singleNumber([4,1,2,1,2])) // 4

console.log(singleNumber([1])) // 1