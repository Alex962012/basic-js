const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {
  let supername=''
    let newarr=[]

    if(Array.isArray(a)&&a!==""){
  for(let item of a ){
      if(typeof item==="string"){
            newarr.push(item.trim().toUpperCase().substring(0,1))
        supername=newarr.sort().join('')
                                }
    else {
    continue
    }

}
return supername
}
    else{
        return false
    }
}

module.exports = {
  createDreamTeam
};
