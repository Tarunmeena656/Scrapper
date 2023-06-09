const { Router } = require("express");
const indexRouter = Router();
const ChannelController = require("../controller/channel_controller");
const feedController = require("../controller/feed_controller");
const arenaConfig = require("../utils/bull_arena");
const { findAllLeadersNews, findAllStateNews } = require("../controller/textSearch_Controller");
const { findAllDatafromDatabase } = require("../controller/searchController");



//route for insert a channel in database
indexRouter.post("/insertChannel", ChannelController.insertChannel);

//route for start a scrapping

indexRouter.get("/start", feedController.startScrapping);

indexRouter.get('/find' , findAllDatafromDatabase)

// search through leader
// indexRouter.get('/leader/:leaderId' , findAllLeadersNews)

// //search through state
// indexRouter.get('/state/:stateId' , findAllStateNews)


//route for arena
indexRouter.get("/", arenaConfig);

module.exports = indexRouter;
