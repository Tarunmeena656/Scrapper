const {contentSelector} = require('../utils/NewsContent')
exports.ndtvnews = {
    feedSelector: ".rss_list li",
    newsSelector: ".ins_storybody p",
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector
}
