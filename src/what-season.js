const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(season) {
  console.log(typeof(season))
 
  if(season===undefined){
    return 'Unable to determine the time of year!'
  } 
  if(typeof season=='string'||Array.isArray(season)|| typeof season=="number"||Object.prototype.toString.call(season) !== '[object Date]'){
    throw new Error ("Invalid date!")
  }
  if ((season instanceof Date === false || Object.getOwnPropertyNames(season).length > 0) && arguments.length > 0) {
    throw new Error('Invalid date!');
}
  if (season instanceof Date){
    if(season.getFullYear()<1970){
        let b=season.getFullYear()

        season.setFullYear(b+1000)
    }
    
if(season.getMonth()==1||season.getMonth()==11||season.getMonth()==0){
    return 'winter'
}
if(season.getMonth()==2||season.getMonth()==3||season.getMonth()==4){
    return 'spring'
}
if(season.getMonth()==5||season.getMonth()==6||season.getMonth()==7){
    return 'summer'
}
if(season.getMonth()==8||season.getMonth()==9||season.getMonth()==10){
    return 'autumn'
}
else if(season===''){
    return 'corretly handles argument absence'
  }
  


}
else {
     throw new Error( 'Invalid date!')
}
}

module.exports = {
  getSeason
};
