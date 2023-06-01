const {contentSelector} = require('../utils/NewsContent')
exports.malayalamnews18 = {
    feedSelector: '.subjective_things li',
    newsSelector: '.content_sec p',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector
}
