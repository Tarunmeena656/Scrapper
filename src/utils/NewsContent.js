exports.contentSelector = async function (page) {
  const textContent = await page.$$eval(this.newsSelector, (news) => {
    return news.map((news) => news.textContent).join(" ");
  });

  return textContent;
};
