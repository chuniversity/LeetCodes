

// too slow
// var isPalindrome = function(s) {
//     return s.toLowerCase().replace(/[\W_]+/g, '') === s.toLowerCase().replace(/[\W_]+/g, '').split('').reverse().join('');
// };  

// too slow
// var isPalindrome = function(s) {
//   // let bs = ["_", " ", ":", ",", ".", "[", "]", "{", "}", "'", '"', "@", "#", "-", "?", ";", "!", "(", ")", "`"];
//   s = s
//   let l = 0;
//   let r = s.length - 1;

//   while (l < r) {
//     console.log('pass', s[l], s[r])
//     if(bs.includes(s[l])) {
//       l++;
//     } else if (bs.includes(s[r])) {
//       r--;
//     } else {
//       if(s[l].toLowerCase() !== s[r].toLowerCase()) {
//         return false;
//       }
//       l++;
//       r--;
//     }
//   }
//   return true
// };  


var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
      if(s[l].toLowerCase() !== s[r].toLowerCase()) {
        return false;
      }
      l++;
      r--;
  }
  return true
};  



console.log(isPalindrome("`l;`` 1o1 ??;l`"));
// console.log(isPalindrome("A mansdsds, a plan,x a canal: Panama"));