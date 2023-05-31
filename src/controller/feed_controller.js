const channelModel = require('../models/channel')
const { getAllFeedsFromElemets } = require("../utils/getFeed");
const { addNewsToQueue } = require('./news_controller');




exports.startScrapping = async (req, res) => {
    try {
        const channels = await channelModel.find();
        for (const channel of channels) {
            await getAllFeedsFromElemets(channel)
        }
        // schedule.scheduleJob(" * 37 * * * * ",async () => {
        //     await addNewsToQueue()
        // })

        await addNewsToQueue()
       
        res.send("Start Scrapping")

    } catch (err) {
       console.log(err)
    }
}