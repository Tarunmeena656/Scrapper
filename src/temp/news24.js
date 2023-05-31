exports.news24 = {
    feedSelector: ".NewsArticle a ",
    newsSelector: ".NewsArticle  p",
    getfeedData: (e, $) => {
        let category_link = $(e).attr("href");
        let category_name = $(e).text();
        return { category_link, category_name }
    },

    getNewsContent: async function (page) {
        const textContent = await page.$$eval(this.newsSelector, news => {
            return (news.map(news => news.textContent)).join(' ');
        });

        return textContent;
    }
}