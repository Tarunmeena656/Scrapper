const {contentSelector, authorSelector} = require('../utils/NewsContent')
exports.thehindu = {
    feedSelector: ".rss-box li ",
    newsSelector: ".articlebodycontent > p",
    authorSelector:'.noimg a',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector
}