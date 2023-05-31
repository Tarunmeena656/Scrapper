exports.skynews = {
    feedSelector: ".sdc-article-body ul li ",
    newsSelector: ".sdc-site-layout__col1 p",
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        let category_name = $(e).find("a").text();
        return { category_link, category_name }
    },

    getNewsContent: async function (page) {
        const textContent = await page.$$eval(this.newsSelector, news => {
            return (news.map(news => news.textContent)).join(' ');
        });

        return textContent;
    }
}