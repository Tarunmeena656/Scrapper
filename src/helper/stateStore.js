const stateModel = require("../models/state");
const stateNewsModel = require("../models/news_state_model");
const NewsModel = require("../models/feedNews");

exports.stateStoreInDatabase = async (stateId, stateNewsArray) => {
  try {
    const state = await stateModel.findById(stateId);
    if (!state) throw createError.NotFound("Not State found");
    const { state_name, variant, _id } = state;
    for (const name of variant) {
      const News = await NewsModel.find({
        $text: {
          $search: name,
        },
      });

      for (const news of News) {
        const { _id, long_description } = news;
        if (!stateNewsArray.includes(_id.toString())) {
          await stateNewsModel.create({
            stateId,
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
