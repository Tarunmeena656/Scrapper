const {contentSelector,authorSelector} = require('../utils/NewsContent')
exports.hindustantimes = {
    feedSelector: '.clearfix p',
    newsSelector: '.storyContent p',
    authorSelector:'.whowhen a',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        console.log(category_link)
        let category_name = $(e).find('strong').text();
        console.log(category_name)
        return { category_link, category_name }
    },
    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector
}
