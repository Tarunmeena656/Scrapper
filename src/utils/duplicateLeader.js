const LeaderModel = require("../models/LeaderModel");


exports.RemoveDuplicateLeader = async (text, leadervariant, allNewsId) => {
    try {
      const leaders = await LeaderModel.find();
      const oldLeader = [];
      for (const leader of leaders) {
        const { leader_name } = leader;
        oldLeader.push(leader_name);
      }
      if (leaders.length != 0) {
        if (!oldLeader.includes(text)) {
          await LeaderModel.create({
            leader_name: text,
            variant: leadervariant,
            newsId: allNewsId,
          });
        }
      } else {
        await LeaderModel.create({
            leader_name: text,
            variant: leadervariant,
            newsId: allNewsId,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  