//e. Return all the palindromes in an array
  
  //Anonymous :
  
  let isPalindrome = function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()
  
  //OUTPUT: racecar malayalam
  
  //IIFE :
  
  ( function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()
  
  //OUTPUT: racecar malayalam
  //3.e Return all the palindrome in an array using arrow function
let isPalindrome1 = function () {
  var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
isPalindrome1()

//OUTPUT: racecar malyalam