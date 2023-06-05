const { contentSelector, authorSelector } = require('../utils/NewsContent')
exports.news18 = {
    feedSelector: ".subjective_things li ",
    newsSelector: ".article-content-box p",
    authorSelector: '.article_postby',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },

    getNewsContent: contentSelector,
    getNewsAuthor: authorSelector
}