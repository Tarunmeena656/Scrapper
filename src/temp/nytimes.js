const { contentSelector } = require('../utils/NewsContent')
exports.nytimes = {
    feedSelector: '.css-1i8lvra li',
    newsSelector: '.meteredContent p',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector

}
