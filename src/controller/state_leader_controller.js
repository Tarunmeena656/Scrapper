
const politicalLeader = require("../utils/political_leader");
const stateKeyword = require("../utils/state");
const leaderModel = require("../models/leader");
const stateModel = require("../models/state");

exports.storeLeaderInDatabase = async (req, res) => {
  try {
    const leaderArray = [];
    const leaders = await leaderModel.find();
    for (const leader of leaders) {
      const { leader_name } = leader;
      leaderArray.push(leader_name);
    }
    const Key = Object.keys(politicalLeader);
    for (const key of Key) {
      if (!leaderArray.includes(key)) {
        await leaderModel.create({
          leader_name: key,
          variant: politicalLeader[key],
        });
      }
    }

    res.send("ok");
  } catch (err) {
    console.log(err);
  }
};

exports.storeStateInDatabase = async (req, res) => {
  try {
    const states = await stateModel.find();
    const stateArray = [];
    for (const state of states) {
      const { state_name } = state;
      stateArray.push(state_name);
    }
    const Key = Object.keys(stateKeyword);
    for (const key of Key) {
      if (!stateArray.includes(key)) {
        await stateModel.create({
          state_name: key,
          variant: stateKeyword[key],
        });
      }
    }

    res.send("ok");
  } catch (err) {
    console.log(err);
  }
};
