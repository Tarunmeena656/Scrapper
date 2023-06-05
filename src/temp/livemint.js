const { contentSelector ,authorSelector } = require('../utils/NewsContent')
exports.livemint = {
    feedSelector: ".mainArea .clearfix ",
    newsSelector: ".contentSec p",
    authorSelector:'.articleInfo a',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("strong").text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector
}