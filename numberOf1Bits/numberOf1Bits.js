


//too slow
// var hammingWeight = function(n) {
//   let result = 0;
//   let x = n.toString(2)
//     for(let i = 0; i < x.length; i++) {
//       if(x[i] === '1') { result++}
//     }
//     return result;
// };

var hammingWeight = function(n) {
  let x = 0;
  while (n !== 0) {
      x += n & 1;
      n >>>= 1; 
  }
  return x;
};


console.log(hammingWeight(00000000000000000000000000001011));

