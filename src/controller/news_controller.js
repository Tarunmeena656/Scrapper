const { parse } = require("rss-to-json");
const FeedModel = require('../models/feed')
const NewsModel = require("../models/feedNews");
const { NewsQueue } = require('../utils/Queue')
const channelModel = require('../models/channel')
const { excludeFeed } = require('../utils/urlExcluded')


exports.addNewsToQueue = async (req, res) => {
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
            try {
                const channel = await channelModel.findById(data.channelId);
                const { channel_name } = channel

                if (!excludeFeed[channel_name].includes(data.category_name)) {
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
                console.log(data.category_link)

            }
            catch (err) {
                console.log("err----", err?.config?.url)
            }
        }

    } catch (err) {
        console.log(err)

    }
};
