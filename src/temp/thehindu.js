const {contentSelector} = require('../utils/NewsContent')
exports.thehindu = {
    feedSelector: ".rss-box li ",
    newsSelector: ".articlebodycontent > p",
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector
}