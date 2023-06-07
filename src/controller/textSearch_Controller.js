const NewsModel = require("../models/feedNews");
const { GetAllVariant } = require("../utils/variant");

exports.textSearch = async (req, res) => {
  try {
    let { name, state, author } = req.query;
    if (author) {
      const News = await NewsModel.find().lean();
      News.filter((news) => {
        const { Author, long_description } = news;
        if (author == Author) {
          console.log(long_description);
        }
      });
    } 
    else {
      const Variant = await GetAllVariant(name, state);

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
    }

    res.send("search");
  } catch (err) {
    console.log(err);
  }
};
