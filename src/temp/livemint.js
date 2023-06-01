const { contentSelector } = require('../utils/NewsContent')
exports.livemint = {
    feedSelector: ".mainArea .clearfix ",
    newsSelector: ".contentSec p",
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("strong").text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector
}