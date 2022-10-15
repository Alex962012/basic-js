const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let filtredArray = arr.filter(item => item > -1)

  function max(a, b) {
    if (a == -1) {
      return
  }
  else{
    return a-b
  }
 
 }
 filtredArray=filtredArray.sort(max)
arr.forEach((element,index) => {
    if(element===-1){
      filtredArray.splice(index,0,-1)
    }
});

return(filtredArray)
}

module.exports = {
  sortByHeight
};
