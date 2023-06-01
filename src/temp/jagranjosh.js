const {contentSelector} = require('../utils/NewsContent')
exports.jagranjosh = {
    feedSelector: '.pB10',
    newsSelector: '.article-det p',
    getfeedData: (e, $) => {
        let category_link = ($(e).find("a").attr("href"));
        let category_name = $(e).text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector
}
