import "./CSS/NewsBody.css";
import { useEffect, useState } from "react";
import { NewsCard } from "./NewsCard";
import { getNews } from "./functions/getNews";
import { sortNews } from "./functions/sortNews";

export function NewsBody(props) {
  const [card, setCard] = useState(<NewsCard />);
  const search = props.search;
  let arrayOfComponents = [];
  let news = [];

  async function main() {
    let result = await getNews(search);
    news = sortNews(result);

    news.map((article) => {
      arrayOfComponents.push(
        <NewsCard
          date={article.datePublished}
          title={article.title}
          src={article.image.url}
          description={article.description}
          url={article.url}
          key={article.id}
        />
      );
    });
    setCard(arrayOfComponents);
  }

  useEffect(() => {
    main();
  }, [search]);

  return <div className="newsBody">{card}</div>;
}
