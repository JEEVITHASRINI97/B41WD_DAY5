//c.Sum of all numbers in an array
  
  
  //Anonymous :
  
  let func = function () {
      
    let ar = [1, 2, 3, 4, 5]
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()
  
  
  //OUTPUT: 15
  
  
  //IIFE :
  
  (function () {
    let sum = [1, 2, 3, 4].reduce(add, 5);
    function add(accumulator, a) {
      return accumulator + a;
    }
    console.log(sum);
  })()
  
  //OUTPUT: 15
  // 3.c sum of two  numbers in an array using arrow function
let func =()=> {
      
    let ar = [1, 2, 3, 4, 5]
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  func()
  //output:15
  
  