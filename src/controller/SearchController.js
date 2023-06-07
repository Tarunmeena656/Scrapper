const NewsModel = require("../models/feedNews");



exports.getAllNewsFromData = async (req, res) => {
    try {
        const News = await NewsModel.find().lean();
        if (News.length != 0) {
            await News.filter((news) => {
                const { long_description } = news;
                console.log(long_description)
            })
        }
        res.send("Ok")
    }
    catch (err) {
        console.log(err)
    }
}