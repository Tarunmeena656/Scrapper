const {contentSelector,authorSelector} = require('../utils/NewsContent')
exports.ndtvnews = {
    feedSelector: ".rss_list li",
    newsSelector: ".ins_storybody p",
    authorSelector:'.pst-by_lnk a',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector
}
