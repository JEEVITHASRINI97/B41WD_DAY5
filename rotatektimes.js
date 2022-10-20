//h.Remove duplicates from an array

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
  
  