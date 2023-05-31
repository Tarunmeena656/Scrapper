exports.samacharjagat = {
    feedSelector: '.table-striped tbody tr',
    newsSelector: '.post_body p',
    getfeedData: (e, $) => {
        const category_link = $(e).find(" a").attr("href");
        const category_name = $(e).find('a').text();
        return { category_name, category_link }
    },
    getNewsContent: async function (page) {
        const textContent = await page.$$eval(this.newsSelector, news => {
             return (news.map(news => news.textContent)).join(' ')
        })

        return textContent
    }


}
