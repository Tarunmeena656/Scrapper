const NewsModel = require("../models/feedNews");
const { RemoveDuplicateLeader } = require("../utils/duplicateLeader");
const politicalLeader = require("../utils/political_leader");


exports.textSearch = async (req, res) => {
  try {
    const { text } = req.query;
    const leadervariant = [];
    const allNewsId = [];
    for (const key in politicalLeader) {
      if (text == key) {
        const obj = politicalLeader[key];
        for (let i in obj) {
          leadervariant.push(obj[i]);
        }
      }
    }
    for (const leader of leadervariant) {
      const allNews = await NewsModel.find({
        $text: {
          $search: leader,
        },
      });
      for (const news of allNews) {
        const { _id, long_description } = news;
        allNewsId.push(_id);
        console.log(long_description);
      }
    }
    await RemoveDuplicateLeader(text ,leadervariant , allNewsId)

    res.send("search");
  } catch (err) {
    console.log(err);
  }
};
