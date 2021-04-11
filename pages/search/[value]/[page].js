import { useRouter } from "next/router";
import { Toolbar } from "../../../components/toolbar";
import Form from "../../../components/form";
import styles from "../../../styles/Feed.module.css";

const SearchFeed = ({ pageNumber, articles, searchValue }) => {
  const router = useRouter();

  return (
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

  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&from=2021-04-09&to=2021-04-10&sortBy=popularity&pageSize=5&page=${pageNumber}`,
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
