const {contentSelector} = require('../utils/NewsContent')
exports.bengalnews18 = {
    feedSelector: '.news_categories li',
    newsSelector: '.khbr_rght_sec p',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector
}
