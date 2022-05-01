const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  let arr2=[]
  console.log(arr)
     if(arr===null||typeof (arr)!=="object"||arr==undefined) {
         return '\'arr\' parameter must be an instance of the Array!'
     }
     for( let i=0; i<arr.length;i++){
         if(arr[i]==undefined){
           continue
         }
         if(arr[i]=='--double-next'){
         arr2.push(arr[i+1])
            
            
       }
       else if(arr[i]=='--double-prev'){
         arr2.push(arr[i-1])
 
               }
     else if(arr[i]=='--discard-next'){
         arr2.pop(arr[i+1])
     
                       }        
       else if(arr[i]=='--discard-prev'){
         arr2.pop(arr[i-1])
               }
               else{
                 arr2.push(arr[i])
               }
     }
     
     return(arr2)
   }

module.exports = {
  transform
};
