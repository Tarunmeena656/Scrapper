const politicalLeader = require("../utils/political_leader");
const stateKeyword = require("../utils/state");
const NewsModel = require("../models/feedNews");
const { leaderStoreInDatabase, stateStoreInDatabase } = require("./leaderDataStore");

exports.GetAllVariant = async (name, state) => {
  try {
    const Variant = [];
    if (name in politicalLeader) {
      for (const i of politicalLeader[name]) {
        Variant.push(i);
      }
      await leaderStoreInDatabase(name, Variant);
    } else {
      if (state in stateKeyword) {
        for (const i of stateKeyword[state]) {
          Variant.push(i);
        }
        await stateStoreInDatabase(state, Variant);
      }
    }
    return Variant;
  } catch (err) {
    console.log(err);
  }
};

exports.getDataFromAllTheVariant = async (Variant) => {
  try {
    for (const variant of Variant) {
      const NewsData = await NewsModel.find({
        $text: {
          $search: variant,
        },
      });
      NewsData.filter((news) => {
        const { long_description } = news;
        console.log(long_description);
      });
    }
  } catch (err) {
    console.log(err);
  }
};
