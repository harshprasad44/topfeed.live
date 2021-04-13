import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Toolbar } from "../../components/toolbar";
import Country from "../../components/country";
import styles from "../../styles/Feed.module.css";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Top News Feed Live - Fetch latest news across the globe"
        description="This portal allows you to get worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals."
        openGraph={{
          site_name: "Top News Feed Live",
          title: "Top News Feed Live",
          description:
            "This portal allows you to get worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals.",
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            hreflang: "en",
            href: "https://topfeed.live/feed/1/",
          },
        ]}
        languageAlternates={[
          {
            hrefLang: "de-AT",
            href: "https://topfeed.live/feed/at/1",
          },
          {
            hrefLang: "en-GB",
            href: "https://topfeed.live/feed/gb/1",
          },
        ]}
      />
      <div className="page-container">
        <Toolbar />
        <Country />
        <h3 className={styles.countryFeed}>United States Feed</h3>
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
                router.push(`/feed/${pageNumber - 1}`);
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
                router.push(`/feed/${pageNumber + 1}`);
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
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
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
    },
  };
};

export default Feed;
