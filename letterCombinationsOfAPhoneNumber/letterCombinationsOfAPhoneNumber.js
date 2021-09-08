let map = {
  0 : [],
  1 : [],
  2 : ['a','b','c'],
  3 : ['d','e','f'],
  4 : ['g','h','i'],
  5 : ['j','k','l'],
  6 : ['m','n','o'],
  7 : ['p','q','r','s'],
  8 : ['t','u','v'],
  9 : ['w','x','y','z']
}

// letterCombinations('23')
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

 // map[digits[2]] === ['a','b','c']
 // map[digits[3]] === ['d','e','f']


// var letterCombinations = function(digits) {

//   let result = [];
//   let idx = 0;

//   for (let i = 0; i < digits.length; i++) {
//     let temp = '';
//     for (let j = 0; j < map[digits[i]].length; j++) {
//       temp += map[digits[i]][j];
//       for(let k = j+1; k < map[digits[i]].length; k++) {
//         temp += map[digits[i]][k]
//         temp = '';
//         result.push(temp);
//       }
      
//     }
    
//   } 
//   return result
// };




// letterCombinations('23')
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]

 // map[digits[2]] === ['a','b','c']
 // map[digits[3]] === ['d','e','f']

var letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  let result = []
  let recurse = function (digits, idx, cur) {
    if (idx === digits.length) {
      result.push(cur)
      
      return 
    }
    for (let i = 0; i < map[digits[idx]].length; i++) {
       recurse(digits, idx + 1, cur += map[digits[idx]][i])
       cur = cur.substring(0, cur.length - 1);
    }
  }
  recurse(digits, 0, '')
  return result;
};

/*

Runtime: 72 ms, faster than 70.21% of JavaScript online submissions for Letter Combinations of a Phone Number.
Memory Usage: 38.6 MB, less than 78.59% of JavaScript online submissions for Letter Combinations of a Phone Number.
*/

console.log(letterCombinations('')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// console.log(letterCombinations('2')) // ["a","b","c"]

// console.log(letterCombinations(''))  // []
