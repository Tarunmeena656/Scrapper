const { Router } = require("express");
const indexRouter = Router();
const ChannelController = require("../controller/channel_controller");
const feedController = require("../controller/feed_controller");
const arenaConfig = require("../utils/bull_arena");
const { findAllDatafromDatabase } = require("../controller/searchController");



//route for insert a channel in database
indexRouter.post("/insertChannel", ChannelController.insertChannel);

//route for start a scrapping

indexRouter.get("/start", feedController.startScrapping);

indexRouter.get('/find' , findAllDatafromDatabase)

//route for arena
indexRouter.get("/", arenaConfig);

module.exports = indexRouter;
