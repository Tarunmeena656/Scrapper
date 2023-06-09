const ChannelModel = require('../models/channel');
const { storeStateInDatabase, storeLeaderInDatabase } = require('./state_leader_controller');


exports.insertChannel = async (req, res) => {
    try {
        let { channel_name, channel_link } = req.body;
        channel_name  = channel_name.toLowerCase().replace(" ", "");
        const channelExist = await ChannelModel.find({ channel_link });
        if (channelExist == 0) {
            await ChannelModel.create({ channel_name, channel_link })
            res.json({ message: "Successfully" })
        }
        await storeStateInDatabase();
        await storeLeaderInDatabase()

    }
    catch (err) {
      console.log(err)
    }
}
