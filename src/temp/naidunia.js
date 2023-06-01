const {contentSelector} = require('../utils/NewsContent')
exports.naidunia = {
    feedSelector: ".listbox li ",
    newsSelector: ".articleBody p",
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        console.log(category_link)
        let category_name = $(e).find("a").text();
        console.log(category_name)
        return { category_link, category_name }
    },

    getNewsContent: contentSelector
}