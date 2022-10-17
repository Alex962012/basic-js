const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let res=[]
  let z=[]
  n=String(n)
  for(let i=0; i<n.length; i++){
  z.push(n[i])
  }
  
  for(let i=0; i<z.length; i++){
  let b=(z.slice(0))
  b.splice(i,1)
  res.push(b.join(''))
  }
  res=res.sort(function(a,b){
    return b-a
  })
  return Number(res[0])
}

module.exports = {
  deleteDigit
};
