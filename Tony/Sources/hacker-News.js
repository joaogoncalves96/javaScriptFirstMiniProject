async function getAllNews(numberOfNews) {
  let news = [];
  let promises = [];
  const numberOfPages = Math.ceil(numberOfNews / 10);

  for (let i = 1; i <= numberOfNews; i++) {
    const url =
      "https://newsdata.io/api/1/news?apikey=pub_651194c78c2d07a79de9f5ac4daa3ba02da3&q=technology&page=" +
      i;
    const promise = fetch(url).then((response) => response.json());
    promises.push(promise);
  }

  const results = await Promise.all(promises);
  for (let i = 0; i < results.length; i++) {
    news.push(results[i].results);
  }

  const finalNews = news.flat().map((item) => [item.title, item.link]);
  console.log(finalNews.slice(0, numberOfNews));

  return finalNews.slice(0, numberOfNews);
}

  function getPromisses(numberOfPages) {
    let promises = [];
    for (let i = 1; i <= numberOfPages; i++) {
      const url =
        "https://newsdata.io/api/1/news?apikey=pub_651194c78c2d07a79de9f5ac4daa3ba02da3&q=technology&page=" +
        i;
      const promise = fetch(url).then((response) => response.json())
      .then((data) => data.results)
      .then((data) => data.map((item) => [item.title, item.link]));
      promises.push(promise);
    }
    return promises;
  }

  /*const responses = await Promise.all(promises);
    const allNews = responses.map(value => value.results);
    const data = allNews.map((news) => [news.title, news.link])
    news.push(data);

     console.log(news.slice(0, numberOfNews));
     console.log(news.length);
    return news;*/


export { getAllNews, getPromisses };
