const fileObj = require('../temp/index')
const { Browser } = require('../service/puppeteer_service');
const NewsModel = require('../models/feedNews')

exports.newsProcessor = async (job, done) => {
    try {
        const { link, title, published, description, channel_name, channelId, feedId } = job.data;
        const browserInstance = await Browser.getInstance();
        const page = await browserInstance.newPage()

        await page.goto(link, { timeout: 0, waitUntil: 'networkidle0' })
        
        const long_description = await fileObj[channel_name].getNewsContent(page);
        const Author = await fileObj[channel_name].getNewsAuthor(page);
      
        const payload = {
            Author : Author.trim(),
            title : title.trim(),
            link : link.trim(),
            short_description: description.replaceAll(/<[^>]*>/ig, "").trim(),
            published_date: published,
            long_description,
            feedId,
            channelId

        }
        await NewsModel.create(payload)
        
        await page.close()
        done();
    }
    catch (err) {
        console.log(err)
    }
}

