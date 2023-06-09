const leaderModel = require('../models/leader');
const stateModel = require('../models/state')
const { findAllLeadersNews, findAllStateNews } = require('./textSearch_Controller');



exports.findAllDatafromDatabase = async(req,res) => {
    try{
        const {leader ,state ,date} = req.query;
        if(leader){
            const leaders = await leaderModel.find({
                leader_name : {'$regex': leader,$options:'i'}
            })
        for(const leader of leaders){
            const {_id  } = leader;
            await findAllLeadersNews(_id)
        }
        }
        if(state){
            const states = await stateModel.find({
                leader_name : {'$regex': state,$options:'i'}
            })
        for(const state of states){
            const {_id  } = state;
            await findAllStateNews(_id);
        }
           
        }
    res.json("success")
    }
    catch(err){
        console.log(err)
    }
}