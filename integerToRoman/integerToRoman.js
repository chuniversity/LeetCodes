

// example 1
var intToRoman1 = function(num, result = '') {
    const values = {
      M : 1000,
      CM : 900,
      D : 500,
      CD : 400,
      C : 100,
      XC: 90,
      L : 50,
      XL : 40,
      X : 10,
      IX : 9,
      V : 5,
      IV : 4,
      I : 1
      }

    if (num === 0) {
      return result
    }
    for (let key in values) {
      if (num >= values[key]) {
        result += key
        num -= values[key];
        return intToRoman(num, result)
      }
    }
  return 'fail';
};

/* 
Runtime: 148 ms, faster than 53.92% of JavaScript online submissions for Integer to Roman.
Memory Usage: 45.9 MB, less than 34.63% of JavaScript online submissions for Integer to Roman.
*/


// example 2
var intToRoman2 = function(num) {
    let result = '';
    if (num >= 1000) {
      while (num >= 1000) {
        result += 'M'
        num -= 1000;
      }
    } 
    if (num >= 900) {
      result += 'CM'
      num -= 900;
    } 
    if (num >= 500) {
      result += 'D';
      num -= 500;
    } 
    if (num >= 400) {
      result += 'CD';
      num -= 400;
    } 
    if (num >= 100) {
      while (num >= 100) {
        result += 'C';
        num -= 100;
      }
    } 
    if (num >= 90) {
      result += 'XC';
      num -= 90;
    } 
    if (num >= 50) {
      result += 'L';
      num -= 50;
    } 
    if (num >= 40) {
      result += 'XL';
      num -= 40;
    } 
    if (num >= 10) {
      while (num >= 10) {
        result += 'X';
        num -= 10;
      }
    } 
    if (num >= 9) {
      result += 'IX';
      num -= 9;
    } 
    if (num >= 5) { 
      result += 'V';
      num -= '5'
    } 
    if (num === 4) {
      result += 'IV';
      num -= 4;
    } 
    if (num >= 1) {
      while (num >= 1) {
        result += 'I'
        num -= 1;
      }
    }
    return result
};

/* 
Runtime: 144 ms, faster than 64.37% of JavaScript online submissions for Integer to Roman.
Memory Usage: 45 MB, less than 63.63% of JavaScript online submissions for Integer to Roman.
*/


// example 3


  var intToRoman = function(num) {
    const values = [
      { 'sym': 'I' , 'val':  1},
      { 'sym': 'IV', 'val':  4},
      { 'sym': 'V' , 'val':  5},
      { 'sym': 'IX' , 'val': 9},
      { 'sym': 'X' , 'val':  10},
      { 'sym': 'XL' , 'val': 40},
      { 'sym': 'L' , 'val':  50},
      { 'sym': 'XC' , 'val': 90},
      { 'sym': 'C' , 'val':  100},
      { 'sym': 'CD' , 'val':  400},
      { 'sym': 'D' , 'val':  500},
      { 'sym': 'CM' , 'val':  900},
      { 'sym': 'M' , 'val':  1000}
    ]
    let result = '';
    let i = 12;
    while ( num > 0) {
      if (num / values[i].val < 1){
        i--;
      } else {
        result += values[i].sym;
        num -= values[i].val
      }
    }
    return result;
};

/* 
Runtime: 136 ms, faster than 83.04% of JavaScript online submissions for Integer to Roman.
Memory Usage: 44.3 MB, less than 96.56% of JavaScript online submissions for Integer to Roman.
*/

// console.log(intToRoman(989));

// console.log(intToRoman(9) === 'IX');
// console.log(intToRoman(3) === 'III');
// console.log(intToRoman(53) === 'LIII');
// console.log(intToRoman(104) === 'CIV');
// console.log(intToRoman(989) === 'CMLXXXIX');