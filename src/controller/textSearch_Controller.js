const leaderNewsModel = require("../models/news_leader_model");
const stateNewsModel = require("../models/news_state_model");
const { leaderStoreInDataBase } = require("../helper/leaderStore");
const { stateStoreInDatabase } = require("../helper/stateStore");

exports.findAllLeadersNews = async (req, res) => {
  try {
    const { leaderId } = req.params;
    const leaderNewsArray = [];
    const LeadersNews = await leaderNewsModel.find({ leaderId });
    for (const leadernews of LeadersNews) {
      const { newsId } = leadernews;
      leaderNewsArray.push(newsId.toString());
    }
    await leaderStoreInDataBase(leaderId, leaderNewsArray);

    res.send("Success");
  } catch (err) {
    console.log(err);
  }
};

exports.findAllStateNews = async (req, res) => {
  try {
    const { stateId } = req.params;
    const stateNewsArray = [];
    const stateNews = await stateNewsModel.find({ stateId });
    for (const statenews of stateNews) {
      const { stateId, newsId } = statenews;
      stateNewsArray.push(newsId.toString());
    }
    await stateStoreInDatabase(stateId, stateNewsArray);

    res.send("Success");
  } catch (err) {
    console.log(err);
  }
};


exports.findAllNewsOfLeaderAndState = async() => {
  try{

  }
  catch(err){
    console.log(err)
  }
}