const LeaderModel = require("../models/LeaderModel");

exports.GetAllVariantOfLeader = async(text , leadervariant ) => {
    try{
        const leaders = await LeaderModel.find();
        const oldLeaders = [];
        for (const leader of leaders) {
          const { leader_name } = leader;
          oldLeaders.push(leader_name)
        }
        if (leaders.length != 0) {
          if (!oldLeaders.includes(text)) {
            await LeaderModel.create({
              leader_name: text,
              variant: leadervariant
          
            })
          }
        }
        else {
          await LeaderModel.create({
            leader_name: text,
            variant: leadervariant
          })
        }

    }
    catch(err){
        console.log(err)
    }
}