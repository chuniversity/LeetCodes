

var lengthOfLastWord = function(s) {
  //iterate over string backwards
    // add letters to result variable
    // if result.length > 0 && current item === " "
      // break
    
    // return result.length || s.trim.length
      // 


    let result = "";
    for (let i = s.length - 1; i >= 0; i--) {
      if(result.length === 0 && s[i] === " ") {

      } else if (s[i] === " ") {
        break;
      } else {
        result += s[i];
      }
    }
    return result.length
    
    
};



let s = "Hello World";
console.log(lengthOfLastWord(s)); // 5

let s2 = "Hello World ";
console.log(lengthOfLastWord(s2)); // 5

let s3 = "World ";
console.log(lengthOfLastWord(s3)); // 5

let s4 = " World ";
console.log(lengthOfLastWord(s4)); // 5
