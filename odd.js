//print odd number in a array
//anonymus function
let array=[1,2,3,4,5,6,7,8,9,10];
let odd=function(){ // declare anonymus function
    let odd= array.filter(num => num %2 ==1) //using filter array 
  console.log(odd)
}
odd();
// Output [1,3,5,7,9]


//IIFE Function

let arr1=[0,1,2,3,4,5,6,7,8,9];

(function ()  {

  let odd= arr1.filter(num => num %2 ==1);
return odd;

  })();

  // Output [1,3,5,7,9]
  
  //3.a. print a odd number in a array using arrow function
let arr=[1,2,3,4,5,6,7,8,9,10];
let oddNo=()=>{
    let odd= arr.filter(num => num %2 ==1);
  console.log(oddNo);
}
oddNo();
  // Output [1,3,5,7,9]


  
