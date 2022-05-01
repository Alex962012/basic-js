const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    

let score=0
if(Array.isArray(arr)){
  score=+1
}
function flat (arr){
arr.forEach((item)=>{

 if(Array.isArray(item)){
   flat(item)
   score=score+1
  
 }
})

}

flat(arr)
return score
  }
}

module.exports = {
  DepthCalculator
};
