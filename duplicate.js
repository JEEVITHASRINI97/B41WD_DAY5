 //g. Remove duplicates from an  array
    
    //Anonymous :
    
    let findDuplicates = function () {// creating a function
      
        const yourArray = [1, 1, 2, 3, 4, 5, 5] //  declare the values 
        let duplicates = []// create empty array 
         //used spread operate to sort the values and adding the sorted array in temparray
        const tempArray = [...yourArray].sort() 
            for (let i = 0; i < tempArray.length; i++) { //iterate the array using for loop
          if (tempArray[i + 1] === tempArray[i]) {//using conditional statement if loop
            duplicates.push(tempArray[i])//using push to adding the elements in duplicate arrray
          }
        }
        console.log(duplicates) 
      }
      findDuplicates()
      
      
      //OUTPUT: (2) [1, 5]
      
      
      
      //IIFE :
      //using IIFE function
      
      (function () {
        
        let numbers = [1, 2, 3, 2, 4, 5, 5, 6];//declare the input values
        
        let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
        
        console.log(duplicates);
      })()
      
      //OUTPUT: (2) [1, 5]
      