const leaderNewsModel = require("../models/news_leader_model");
const stateNewsModel = require("../models/news_state_model");
const { leaderStoreInDataBase } = require("../helper/leaderStore");
const { stateStoreInDatabase } = require("../helper/stateStore");

exports.findAllLeadersNews = async (leaderId) => {
  try {
    const leaderNewsArray = [];
    const LeadersNews = await leaderNewsModel.find({ leaderId });
    LeadersNews.filter((leadernews) => {
      const { newsId } = leadernews;
      leaderNewsArray.push(newsId.toString());
    });
    await leaderStoreInDataBase(leaderId, leaderNewsArray);
  } catch (err) {
    console.log(err);
  }
};

exports.findAllStateNews = async (stateId) => {
  try {
    const stateNewsArray = [];
    const stateNews = await stateNewsModel.find({ stateId });
    stateNews.filter((statenews) => {
      const { stateId, newsId } = statenews;
      stateNewsArray.push(newsId.toString());
    });

    await stateStoreInDatabase(stateId, stateNewsArray);
  } catch (err) {
    console.log(err);
  }
};
