
// too slow

// var maxProfit = function(p) {
//   let profit = 0;
//   let l = p[0];
//   let h = p[0];
//   let calc = (l,h) => h - l;
//   for (let i = 1; i < p.length; i++) {
//     let c = p[i];
//     if(c < l) { l = c; h = c};
//     if(c > h) {h = c};
//     if (calc(l,h) > profit) { profit = calc(l,h)};
//   }
//   return profit
// };



var maxProfit = function(p) {
  let profit = 0;
  let l = Infinity;
  for (let i = 1; i < p.length; i++) {
    if (p[i] < l) { l = p[i]};
    profit = Math.max(profit, p[i] - l)
  }
  return profit
};


console.log(maxProfit([7,1,5,3,6,4])); // 5

console.log(maxProfit([2,1,2,1,0,1,2])); // 2

console.log(maxProfit([7,1,5,3,6,4])); // 5

console.log(maxProfit([7,6,4,3,1])); // 0

console.log(maxProfit([2,4,1])); // 2

