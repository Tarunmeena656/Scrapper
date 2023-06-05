const {contentSelector,authorSelector} = require('../utils/NewsContent')
exports.news24 = {
    feedSelector: ".NewsArticle a ",
    newsSelector: ".NewsArticle  p",
    authorSelector:'.article__author',
    getfeedData: (e, $) => {
        let category_link = $(e).attr("href");
        let category_name = $(e).text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector
}