exports.contentSelector = async function (page) {
  const textContent = await page.$$eval(this.newsSelector, (news) => {
    return news.map((news) => news.textContent).join(" ");
  });

  return textContent;
};


exports.authorSelector = async function (page) {
  let element = await page.$(this.authorSelector)
  let author = await page.evaluate(el => el?.textContent, element)
  console.log(author)
  return author;
};
