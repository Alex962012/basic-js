const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  if(typeof sampleActivity!=='string'||isNaN(Number(sampleActivity))||sampleActivity===Infinity||sampleActivity===""||typeof sampleActivity==='object')
  {
    return false
  }
  else{
  let a=(0.693/5730).toFixed(8) 
let res=(Math.log(15/sampleActivity)).toFixed(4)/a
      if(isNaN(Math.ceil(res))||(Math.ceil(res))===Infinity||(Math.ceil(res))<0){
          return false
      }
      
          

return (Math.ceil(res))
}
}
module.exports = {
  dateSample
};
