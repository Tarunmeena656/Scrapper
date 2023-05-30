const ChannelModel = require('../models/channel')


exports.insertChannel = async (req, res , next) => {
    try {
        let { channel_name, channel_link } = req.body;
        channel_name  = channel_name.toLowerCase().replace(" ", "");
        const channelExist = await ChannelModel.find({ channel_link });
        if (channelExist == 0) {
            await ChannelModel.create({ channel_name, channel_link })
            res.json({ message: "Successfully" })
        }

    }
    catch (err) {
       next(err)
    }
}
