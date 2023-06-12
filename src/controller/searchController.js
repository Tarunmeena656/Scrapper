const leaderModel = require("../models/leader");
const stateModel = require("../models/state");
const NewsModel = require("../models/feedNews");
const {
  findAllLeadersNews,
  findAllStateNews,
} = require("./textSearch_Controller");

exports.findAllDatafromDatabase = async (req, res) => {
  try {
    const { leader, state, date, text } = req.query;
    if (leader) {
      const leaders = await leaderModel.find({
        leader_name: { $regex: leader, $options: "i" },
      });
      for (const leader of leaders) {
        const { _id } = leader;
        await findAllLeadersNews(_id);
      }
    }
    if (state) {
      const states = await stateModel.find({
        state_name: { $regex: state, $options: "i" },
      });
      for (const state of states) {
        const { _id } = state;
        await findAllStateNews(_id);
      }
    }

    if (date) {
      const DateToSearch = new Date(date).toString().substring(0, 10);
      const News = await NewsModel.find();
      News.filter((news) => {
        const { long_description, published_date } = news;
        const pub_date = published_date.toString().substring(0, 10);
        if (pub_date == DateToSearch) {
          console.log(long_description);
        }
      });
    }

    if (text) {
      const News = await NewsModel.find({
        $text: {
          $search: text,
          $caseSensitive: true,
          $diacriticSensitive: true,
        },
      });
      News.filter((news) => {
        const { long_description, Author } = news;
        console.log(long_description);
      });
    }

    res.json("success");
  } catch (err) {
    console.log(err);
  }
};
