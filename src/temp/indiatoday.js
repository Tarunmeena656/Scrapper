const { contentSelector } = require('../utils/NewsContent')
exports.indiatoday = {
    feedSelector: '.links li',
    newsSelector: '.description p,.PhotoCard_card__details__3Le4m p',
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },
    getNewsContent: contentSelector

}
