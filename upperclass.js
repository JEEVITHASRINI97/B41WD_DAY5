//b. Convert all the strings to title caps in a string array

//Anonymous :
 
let str = function () {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()
  
  //OUTPUT: Hello There How Are You
  



  //IIFE : 
  
  (function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
  })("hello there how are you")
  
  //OUTPUT: Hello There How Are You


  //3.bprint lower case tile to upper case using arrow function
let str1= () => {
  let arr = "hello there how are you"
  let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(titlecase)
}
str1()
//OUTPUT: Hello There How Are You

  