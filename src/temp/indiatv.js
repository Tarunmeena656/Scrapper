const { contentSelector, authorSelector } = require('../utils/NewsContent');
exports.indiatv = {
    feedSelector: '.rss li',
    newsSelector: '.content p',
    authorSelector:'.multiple-author a , .author-name a',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector

}
