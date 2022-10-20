//f.Return median of two sorted arrays of same size.
  
  //Anonymous :
  let median = function(a, b) {
  
    let c = [...a, ...b].sort((a, b) => a - b);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
    return c[half];
  } else {
    
    return (c[half] + c[half - 1]) / 2;
  }
  }
  let arr1 = [1, 12, 15, 26, 38,24];
  let arr2 = [2, 13, 17, 30, 45, 47];
  console.log(median(arr1, arr2));
  
  //OUTPUT: 20.5
  //IIFE :
( function() {
    let arr1 = [1, 12, 15, 26, 38,24];
    let arr2 = [2, 13, 17, 30, 45, 47];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()
    
    //OUTPUT: 20.5
    
   
    //h.Rotate an array k times
    
    //Anonymous :
    
    
    let rotateArray =function(A, K) {
      if (A.length === K || K === 0) {
          return A;
      }
      K = K % A.length;
      for (let i = 0; i < K; i++) {
          A.unshift(A.pop());
      }
    console.log(A)
    }
    rotateArray([1,2,3,4,5],2)
    
    
    //OUTPUT: (5) [4, 5, 1, 2, 3]
    
    
    //IIFE :
    
    (function(A, K) {
      if (A.length === K || K === 0) {
          return A;
      }
      K = K % A.length;
      for (let i = 0; i < K; i++) {
          A.unshift(A.pop());
      }
    console.log(A)
    })([1,2,3,4,5],2)
    
    //OUTPUT: (5) [4, 5, 1, 2, 3]
    
    
    
    