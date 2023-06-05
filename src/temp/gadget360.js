const {contentSelector ,authorSelector} = require('../utils/NewsContent')
exports.gadget360 = {
    feedSelector: '.rssfeed li',
    newsSelector: '.fullstoryCtrl_fulldetails p',
    authorSelector:'.dateline ',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector
}
