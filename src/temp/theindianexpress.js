exports.theindianexpress = {
    feedSelector: ".rss_section p ",
    newsSelector: ".articlestorycontent p",
    getfeedData: (e, $) => {
        let category_link = $(e).find("a").attr("href");
        console.log(category_link)
        let category_name = $(e).find("a").text();
        console.log(category_name)
        return { category_link, category_name }
    },

    getNewsContent: async function (page) {
        const textContent = await page.$$eval(this.newsSelector, news => {
            return (news.map(news => news.textContent)).join(' ');
        });

        return textContent;
    }
}