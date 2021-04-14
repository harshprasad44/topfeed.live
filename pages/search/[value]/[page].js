import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Toolbar } from "../../../components/toolbar";
import Form from "../../../components/form";
import styles from "../../../styles/Feed.module.css";

const SearchFeed = ({ pageNumber, articles, searchValue }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Top News Feed Live - Search latest news across the globe"
        description={`1)${articles[0].title}, 2) ${articles[1].title}, 3) ${articles[2].title}, 4) ${articles[3].title}, 5) ${articles[4].title}`}
        openGraph={{
          site_name: "Top News Feed Live",
          title: "Top News Feed Live - Search latest news across the globe",
          url: `https://topfeed.live/search/${searchValue}/1`,
          description:
            "This portal allows you to search latest worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals.",
          images: [
            {
              url: articles[0].urlToImage,
              alt: "Top Feed News Image",
            },
            {
              url: articles[1].urlToImage,
              alt: "Top Feed News Image",
            },
            {
              url: articles[2].urlToImage,
              alt: "Top Feed News Image",
            },
            {
              url: articles[3].urlToImage,
              alt: "Top Feed News Image",
            },
            {
              url: articles[4].urlToImage,
              alt: "Top Feed News Image",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            hrefLang: "en",
            href: `https://topfeed.live/search/${searchValue}/1/`,
          },
        ]}
      />
      <div className="page-container">
        <Toolbar />
        <Form />
        <h3 className={styles.countryFeed}>Search Results</h3>
        <div className={styles.main}>
          {articles.map((article, index) => (
            <div key={index} className={styles.post}>
              <h1 onClick={() => window.open(`${article.url}`, "_blank")}>
                {article.title}
              </h1>
              <p>{article.description}</p>
              {!!article.urlToImage && (
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(`${article.url}`, "_blank")}
                  src={article.urlToImage}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.paginator}>
          <div
            onClick={() => {
              if (pageNumber > 1) {
                router.push(`/search/${searchValue}/${pageNumber - 1}`);
              }
            }}
            className={pageNumber === 1 ? styles.disabled : styles.active}
          >
            Previous Page
          </div>

          <div>#{pageNumber}</div>

          <div
            onClick={() => {
              if (pageNumber < 5) {
                router.push(`/search/${searchValue}/${pageNumber + 1}`);
              }
            }}
            className={pageNumber === 5 ? styles.disabled : styles.active}
          >
            Next Page
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const searchValue = pageContext.query.value;
  const pageNumber = pageContext.query.page;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 0).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`;

  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&from=${today}&sortBy=popularity&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();
  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
      searchValue,
    },
  };
};

export default SearchFeed;
