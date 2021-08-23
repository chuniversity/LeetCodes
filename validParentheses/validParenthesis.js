// checks
  // opens === close

  // let parenO = 0;
  // let parenC = 0;
  // let bracketO = 0;
  // let bracketO = 0;
  // let curlyO = 0;
  // let curlyC = 0;
  // let parenOpen = ;
  // let bracketOPen = false;
  // let bracketClosed = false;



// var isValid = function(s) {
//     let paren = 0;
//     let bracket = 0;
//     let curly = 0;

//     let parenCont = [];
//     let bracketCont = []
//     let curlyCont = []

//     let parenFlag = false;
//     let bracketflag = false;
//     let curlyFlag = false; 

//     for (let i = 0; i < s.length; i++) {
//       if(s[i] === '(') { 
//         paren++;
//         parenFlag = 
//       };
//       if(s[i] === ')') { 
//         paren--; 
//       };
//       if(s[i] === '[') { bracket++ };
//       if(s[i] === ']') { bracket--; };
//       if(s[i] === '{') { curly++; };
//       if(s[i] === '}') { curly--; }; 
//     }
// };

var isValid = function(s) {
  let pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if(s[i] === '(' || s[i] === '[' || s[i] === '{' ) {
      stack.push(s[i])
    } else if (s[i] === ')' || s[i] === ']' || s[i] === '}' ) {
      let last = stack.pop();
      if(pairs[last] !== s[i]) {
        return false
      }
    } 
  };
  return stack.length === 0;
};

/*
Runtime: 76 ms, faster than 60.05% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 40.1 MB, less than 36.37% of JavaScript online submissions for Valid Parentheses.
*/




console.log(isValid("()")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid(("(]")))  // false
console.log(isValid("([)]")) // false
console.log(isValid("{[]}")) // true
console.log(isValid("([)]")) // false

 