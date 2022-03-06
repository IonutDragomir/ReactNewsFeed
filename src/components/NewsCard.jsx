import "./CSS/NewsCard.css";

export function NewsCard(props) {
  return (
    <div className="news">
      <p id="date">{props.date}</p>
      <p id="title">{props.title}</p>
      <img id="imageNews" src={props.src} />
      <p id="content">{props.description}</p>
      <a href={props.url} id="link">
        Go to News. 🔗➡️
      </a>
    </div>
  );
}

// NewsCard.defaultProps = {
//   date: "15/02/2022",
//   title: "NewsFeed Project",
//   src: "https://scontent.fclj1-2.fna.fbcdn.net/v/t1.6435-9/s960x960/168472469_261166119076875_2779974012176618651_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeHOza4kTPXmERRYW_hflpcTc-GdTHnScgpz4Z1MedJyCo4ZYwK2V5kIfHzCX0ajMlp2tDpYnVjf1P-Hv3F4-bv5&_nc_ohc=x3SWZ-hLfmEAX8UEwRF&_nc_ht=scontent.fclj1-2.fna&oh=00_AT_s43QfZ3s3r-ueGJadSmhlyEUVdAbSVKtTXLGhD66rPg&oe=62308814",
//   description: "My NewsFeed Project made in React",
//   url: "https://www.facebook.com/NewsRomania11/",
// };
