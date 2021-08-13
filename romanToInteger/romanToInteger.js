

/*
MCMXCIV

1000 100-1000 10-100 1-5

XIII
IX

I string
O Number
C 
E


*/

const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

//tooslow
// var romanToInt = function(s) {
//     let result = 0;
//     for (let i = 0; i < s.length; i++) {
//       if(values[s[i]] < values[s[i + 1]]) {
//         result -= values[s[i]]
//       } else {
//         result += values[s[i]];
//       }
//     }
//     return result   
// };


var romanToInt = function(s) {
  let result = 0;
  let prevVal = 0;
  for (let i = s.length-1; i >= 0; i--) {
    if(values[s[i]] >= prevVal) {
      result += values[s[i]];
      prevVal = values[s[i]];
    } else {
      result -= values[s[i]]
    }
  }
  return result   
};


console.log('14', romanToInt('XIV'))

console.log(romanToInt('I'))
console.log(romanToInt('II'))
console.log(romanToInt('III'))

console.log(romanToInt(`I`))
console.log(romanToInt(`II`))
console.log(romanToInt(`III`))
console.log(romanToInt(`IV`))
console.log(romanToInt(`V`))
console.log(romanToInt(`VI`))
console.log(romanToInt(`VII`))
console.log(romanToInt(`VIII`))
console.log(romanToInt(`IX`))
console.log(romanToInt(`X`))
console.log(romanToInt(`XI`))
console.log(romanToInt(`XII`))
console.log(romanToInt(`XIII`))
console.log(romanToInt(`XIV`))
console.log(romanToInt(`XV`))
console.log(romanToInt(`XVI`))
console.log(romanToInt(`XVII`))
console.log(romanToInt(`XVIII`))
console.log(romanToInt(`XIX`))
console.log(romanToInt(`XX`))
console.log(romanToInt(`XXI`))
console.log(romanToInt(`XXII`))
console.log(romanToInt(`XXIII`))
console.log(romanToInt(`XXIV`))
console.log(romanToInt(`XXV`))
console.log(romanToInt(`XXVI`))
console.log(romanToInt(`XXVII`))
console.log(romanToInt(`XXVIII`))
console.log(romanToInt(`XXIX`))
console.log(romanToInt(`XXX`))
console.log(romanToInt(`XXXI`))
console.log(romanToInt(`XXXII`))
console.log(romanToInt(`XXXIII`))
console.log(romanToInt(`XXXIV`))
console.log(romanToInt(`XXXV`))
console.log(romanToInt(`XXXVI`))
console.log(romanToInt(`XXXVII`))
console.log(romanToInt(`XXXVIII`))
console.log(romanToInt(`XXXIX`))



console.log('40',romanToInt(`XL`))
console.log(romanToInt(`XLI`))
console.log(romanToInt(`XLII`))
console.log(romanToInt(`XLIII`))
console.log(romanToInt(`XLIV`))
console.log(romanToInt(`XLV`))
console.log(romanToInt(`XLVI`))
console.log(romanToInt(`XLVII`))
console.log(romanToInt(`XLVIII`))
console.log(romanToInt(`XLIX`))
console.log('50',romanToInt(`L`))
console.log(romanToInt(`LI`))
console.log(romanToInt(`LII`))
console.log(romanToInt(`LIII`))
console.log(romanToInt(`LIV`))
console.log(romanToInt(`LV`))
console.log(romanToInt(`LVI`))
console.log(romanToInt(`LVII`))
console.log(romanToInt(`LVIII`))

//
console.log(romanToInt(`XCV`))
console.log(romanToInt(`XCVI`))
console.log(romanToInt(`XCVII`))
console.log(romanToInt(`XCVIII`))
console.log(romanToInt(`XCIX`))
console.log(romanToInt(`C`))
console.log(romanToInt(`CC`))
console.log(romanToInt(`CCC`))
console.log(romanToInt(`CD`))
console.log(romanToInt(`D`))
console.log(romanToInt(`DC`))
console.log(romanToInt(`DCC`))
console.log(romanToInt(`DCCCIV`))
console.log(romanToInt(`CM`))
console.log(romanToInt(`M`))