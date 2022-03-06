export function sortNews(firstAPI) {
  //we save the newest news
  //data property helps us to compare articles between them
  //index gives us the pozition in the array where the article is so that we are able to delete it after we sort it
  //API tells us in wich array the article is ex: 1(first), 2(second ..)
  let recentNews = {
    date: "",
    article: "",
    index: 0,
    id: "",
  };

  // this is the array in wich we sort all articles
  let sortedArray = [];

  //we check all  15 articles
  for (let i = 0; i < 10; ++i) {
    // search in first array until there are no more elements in it
    if (firstAPI.length > 0) {
      for (let k = 0; k < firstAPI.length; ++k) {
        if (recentNews.date < firstAPI[k].datePublished) {
          recentNews.date = firstAPI[k].datePublished;
          recentNews.article = firstAPI[k];
          recentNews.index = k;
          recentNews.id = firstAPI[k].id;
        }
      }
    }

    //we add the most recent news
    sortedArray.push({ ...recentNews.article });
    //we check in wich array is the article that is sorted and now needs to be deleted

    firstAPI.splice(recentNews.index, 1);
    //we reset the recentNews object so that we can recheck
    recentNews = {
      date: "",
      article: "",
      index: 0,
      id: "",
    };
  }
  return sortedArray;
}
