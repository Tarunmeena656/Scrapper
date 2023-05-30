const { parse } = require("rss-to-json");
const FeedModel = require('../models/feed')
const NewsModel = require("../models/feedNews");
const { NewsQueue } = require('../utils/Queue')
const channelModel = require('../models/channel')



exports.addNewsToQueue = async (req, res ,next) => {
    try {

        const newsLinks = await NewsModel.find({}, "link -_id");
        const waitingLinks = await NewsQueue.getActive();
        const activeLinks = await NewsQueue.getWaiting();

        let linkArray = newsLinks.map((data) => data.link);

        linkArray = linkArray.concat(
            [...waitingLinks, ...activeLinks].map((item) => item.data.link)
        );

        const feedData = await FeedModel.find();
        
        for (const data of feedData) {
            const channel = await channelModel.findById(data.channelId);
            const { channel_name } = channel
            const rss = await parse(data.category_link);


            for (let item of rss.items) {
                if (!linkArray.includes(item.link)) {
                    await NewsQueue.add({
                        ...item,
                        feedId: data._id,
                        channelId: data.channelId,
                        channel_name

                    });
                }
            }
        }
    } catch (err) {
        next(err);
    }
};
