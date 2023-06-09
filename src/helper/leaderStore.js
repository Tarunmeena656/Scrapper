const leaderNewsModel = require("../models/news_leader_model");
const NewsModel = require("../models/feedNews");
const createError = require("http-errors");
const leaderModel = require("../models/leader");

exports.leaderStoreInDataBase = async (leaderId, leaderNewsArray) => {
  try {
    const leader = await leaderModel.findById(leaderId);
    if (!leader) throw createError.NotFound("Leader not here");
    const { leader_name, variant, _id } = leader;
    for (const name of variant) {
      const News = await NewsModel.find({
        $text: {
          $search: name
        },
      });

      for (const news of News) {
        const { _id, long_description } = news;
        if (!leaderNewsArray.includes(_id.toString())) {
          await leaderNewsModel.create({
            leaderId,
            newsId: _id,
          });
        }
        console.log(long_description);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
