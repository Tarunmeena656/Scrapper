const { Router } = require('express');
const indexRouter = Router();
const ChannelController = require('../controller/channel_controller');
const feedController = require('../controller/feed_controller');
const searchController = require('../controller/textSearch_Controller');
const arenaConfig = require('../utils/bull_arena');
const { getAllStateNews } = require('../utils/stateNews');



//route for insert a channel in database
indexRouter.post('/insertChannel', ChannelController.insertChannel);



//route for start a scrapping

indexRouter.get('/start', feedController.startScrapping);



// search a leader text
indexRouter.get('/search', searchController.textSearch);



// search a state text
indexRouter.get('/state', getAllStateNews);


//route for arena
indexRouter.get('/', arenaConfig);




module.exports = indexRouter;