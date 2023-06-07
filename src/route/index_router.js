const { Router } = require("express");
const indexRouter = Router();
const ChannelController = require("../controller/channel_controller");
const feedController = require("../controller/feed_controller");
const arenaConfig = require("../utils/bull_arena");
const searchController = require('../controller/textSearch_Controller')
const { getAllNewsFromData } = require("../controller/SearchController");



//route for insert a channel in database
indexRouter.post("/insertChannel", ChannelController.insertChannel);

//route for start a scrapping

indexRouter.get("/start", feedController.startScrapping);

// search a leader text
indexRouter.get('/search', searchController.textSearch);



indexRouter.get("/find", getAllNewsFromData);

//route for arena
indexRouter.get("/", arenaConfig);

module.exports = indexRouter;
