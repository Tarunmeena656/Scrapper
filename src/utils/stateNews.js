const stateKeyword = require("../utils/state");
const NewsModel = require("../models/feedNews");

const { RemoveDuplicateState } = require("./duplicateState");

exports.getAllStateNews = async (req, res) => {
  try {
    const { name } = req.query;
    const stateVariant = [];
    const allNewsId = [];
    for (const key in stateKeyword) {
      if (name == key) {
        const obj = stateKeyword[key];
        for (let i in obj) {
          stateVariant.push(obj[i]);
        }
      }
    }
    for (const state of stateVariant) {
      const allNews = await NewsModel.find({
        $text: {
          $search: state,
        },
      });
      for (const news of allNews) {
        const { _id, long_description } = news;
        allNewsId.push(_id);
        console.log(long_description);
      }
    }
    await RemoveDuplicateState(name, stateVariant, allNewsId);

    res.send("success");
  } catch (err) {
    console.log(err);
  }
};
