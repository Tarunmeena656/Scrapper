const {contentSelector,authorSelector} = require('../utils/NewsContent')
exports.samacharjagat = {
    feedSelector: '.table-striped tbody tr',
    newsSelector: '.post_body p',
    authorSelector:'.post_heading a',
    getfeedData: (e, $) => {
        const category_link = $(e).find(" a").attr("href");
        const category_name = $(e).find('a').text();
        return { category_name, category_link }
    },
    getNewsContent: contentSelector,
    getNewsAuthor : authorSelector


}
