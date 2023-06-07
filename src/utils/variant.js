const politicalLeader = require("../utils/political_leader");
const stateKeyword = require('../utils/state');
exports.GetAllVariant = async(name ,state)=> {
    try{
        const Variant = [];
        if (name in politicalLeader) {
            for (const i of politicalLeader[name]) {
              Variant.push(i);
            }
          }
          else {
            for (const i of stateKeyword[state]) {
              Variant.push(i);
            }
          }
      return Variant;
    }
    catch(err){
        console.log(err)
    }
}