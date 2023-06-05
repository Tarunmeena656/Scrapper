const { contentSelector, authorSelector } = require('../utils/NewsContent')
exports.zeebusiness = {
    feedSelector: ".clearfix li ",
    newsSelector: ".even p",
    authorSelector: '',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector,
    getNewsAuthor: authorSelector
}