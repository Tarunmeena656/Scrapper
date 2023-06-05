const { contentSelector,authorSelector} = require('../utils/NewsContent')
exports.onmanorama = {
    feedSelector: '.bor-dash li',
    newsSelector: '.long-form-text p',
    authorSelector:'.story-author-name',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector

}
