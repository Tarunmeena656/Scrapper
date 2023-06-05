const NewsModel = require("../models/feedNews");
const politicalLeader = require("../utils/political_leader");
const LeaderModel = require("../models/LeaderModel");

exports.textSearch = async (req, res) => {
    try {
        const { text } = req.query;
        const leaderVariant = [];
        //  console.log(politicalLeader)
        for (const key in politicalLeader) {
            var obj = politicalLeader[key];
            for (let i in obj) {
               
                    console.log(obj[i])
                    
                }

        
        }
        // await LeaderModel.create({
        //     leader_name: text,
        //     variant: leaderVariant,
        // });

        res.send("search");
    } catch (err) {
        console.log(err);
    }
};
