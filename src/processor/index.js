const {newsProcessor} = require('./news_Processor');

const {NewsQueue} = require('../utils/Queue')


// Queue processes

 NewsQueue.process(5,newsProcessor)


