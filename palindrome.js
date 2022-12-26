//e. Return all the palindromes in an array
  
  //Anonymous :
  
  let isPalindrome = function () {
    let myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    let arr = myArray.filter(function (c, d) {
      let palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()
  
  //OUTPUT: racecar malayalam
  
  //IIFE :
  
  ( function () {
    let myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    let arr = myArray.filter(function (c, d) {
      let palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()
  
  //OUTPUT: racecar malayalam
  //3.e Return all the palindrome in an array using arrow function
let isPalindrome1 = function () {
  let myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  let arr = myArray.filter(function (c, d) {
    let palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
isPalindrome1()

//OUTPUT: racecar malyalam
