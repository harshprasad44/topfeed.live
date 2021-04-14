import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { Toolbar } from "../../../components/toolbar";
import Country from "../../../components/country";
import styles from "../../../styles/Feed.module.css";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Top News Feed Live - Récupérez les dernières nouvelles du Maroc à travers le monde"
        description={`1)${articles[0].title}, 2) ${articles[1].title}, 3) ${articles[2].title}, 4) ${articles[3].title}, 5) ${articles[4].title}`}
        openGraph={{
          site_name: "Top News Feed Live",
          title:
            "Top News Feed Live - Récupérez les dernières nouvelles du Maroc à travers le monde",
          description:
            "Ce portail vous permet d'obtenir les meilleures nouvelles du Maroc et du monde entier en ligne avec des titres et des images, vous pouvez également rechercher des nouvelles par pays dans différentes langues, offrant de meilleurs résultats de recherche que d'autres portails.",
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
            hrefLang: "fr-ma",
            href: "https://topfeed.live/feed/ma/1/",
          },
        ]}
        languageAlternates={[
          {
            hrefLang: "en-us",
            href: "https://topfeed.live/feed/1",
          },
          {
            hrefLang: "de-at",
            href: "https://topfeed.live/feed/at/1",
          },
          {
            hrefLang: "en-au",
            href: "https://topfeed.live/feed/au/1",
          },
          {
            hrefLang: "fr-be",
            href: "https://topfeed.live/feed/be/1",
          },
          {
            hrefLang: "bg-bg",
            href: "https://topfeed.live/feed/bg/1",
          },
          {
            hrefLang: "pt-br",
            href: "https://topfeed.live/feed/br/1",
          },
          {
            hrefLang: "en-ca",
            href: "https://topfeed.live/feed/ca/1",
          },
          {
            hrefLang: "de-sz",
            href: "https://topfeed.live/feed/ch/1",
          },
          {
            hrefLang: "zh-cn",
            href: "https://topfeed.live/feed/cn/1",
          },
          {
            hrefLang: "es-co",
            href: "https://topfeed.live/feed/co/1",
          },
          {
            hrefLang: "es-cu",
            href: "https://topfeed.live/feed/cu/1",
          },
          {
            hrefLang: "cs-cz",
            href: "https://topfeed.live/feed/cz/1",
          },
          {
            hrefLang: "de-de",
            href: "https://topfeed.live/feed/de/1",
          },
          {
            hrefLang: "ar-eg",
            href: "https://topfeed.live/feed/eg/1",
          },
          {
            hrefLang: "fr-fr",
            href: "https://topfeed.live/feed/fr/1",
          },
          {
            hrefLang: "el-gr",
            href: "https://topfeed.live/feed/gr/1",
          },
          {
            hrefLang: "zh-hk",
            href: "https://topfeed.live/feed/hk/1",
          },
          {
            hrefLang: "hu-hu",
            href: "https://topfeed.live/feed/hu/1",
          },
          {
            hrefLang: "id-id",
            href: "https://topfeed.live/feed/id/1",
          },
          {
            hrefLang: "en-ie",
            href: "https://topfeed.live/feed/ie/1",
          },
          {
            hrefLang: "he-il",
            href: "https://topfeed.live/feed/il/1",
          },
          {
            hrefLang: "en-in",
            href: "https://topfeed.live/feed/in/1",
          },
          {
            hrefLang: "it-it",
            href: "https://topfeed.live/feed/it/1",
          },
          {
            hrefLang: "ja-jp",
            href: "https://topfeed.live/feed/jp/1",
          },
          {
            hrefLang: "ko-kr",
            href: "https://topfeed.live/feed/kr/1",
          },
          {
            hrefLang: "lt-lt",
            href: "https://topfeed.live/feed/lt/1",
          },
          {
            hrefLang: "lv-lv",
            href: "https://topfeed.live/feed/lv/1",
          },
          {
            hrefLang: "es-ar",
            href: "https://topfeed.live/feed/ar/1",
          },
          {
            hrefLang: "es-mx",
            href: "https://topfeed.live/feed/mx/1",
          },
          {
            hrefLang: "en-my",
            href: "https://topfeed.live/feed/my/1",
          },
          {
            hrefLang: "en-ng",
            href: "https://topfeed.live/feed/ng/1",
          },
          {
            hrefLang: "nl-nl",
            href: "https://topfeed.live/feed/nl/1",
          },
          {
            hrefLang: "no-no",
            href: "https://topfeed.live/feed/no/1",
          },
          {
            hrefLang: "en-nz",
            href: "https://topfeed.live/feed/nz/1",
          },
          {
            hrefLang: "en-ph",
            href: "https://topfeed.live/feed/ph/1",
          },
          {
            hrefLang: "pl-pl",
            href: "https://topfeed.live/feed/pl/1",
          },
          {
            hrefLang: "pt-pt",
            href: "https://topfeed.live/feed/pt/1",
          },
          {
            hrefLang: "ro-ro",
            href: "https://topfeed.live/feed/ro/1",
          },
          {
            hrefLang: "bs-rs",
            href: "https://topfeed.live/feed/rs/1",
          },
          {
            hrefLang: "ru-ru",
            href: "https://topfeed.live/feed/ru/1",
          },
          {
            hrefLang: "en-za",
            href: "https://topfeed.live/feed/za/1",
          },
          {
            hrefLang: "sv-se",
            href: "https://topfeed.live/feed/se/1",
          },
          {
            hrefLang: "en-sg",
            href: "https://topfeed.live/feed/sg/1",
          },
          {
            hrefLang: "sl-si",
            href: "https://topfeed.live/feed/si/1",
          },
          {
            hrefLang: "sk-sk",
            href: "https://topfeed.live/feed/sk/1",
          },
          {
            hrefLang: "th-th",
            href: "https://topfeed.live/feed/th/1",
          },
          {
            hrefLang: "tr-tr",
            href: "https://topfeed.live/feed/tr/1",
          },
          {
            hrefLang: "zh-tw",
            href: "https://topfeed.live/feed/tw/1",
          },
          {
            hrefLang: "uk-ua",
            href: "https://topfeed.live/feed/ua/1",
          },
          {
            hrefLang: "ar-ae",
            href: "https://topfeed.live/feed/ae/1",
          },
          {
            hrefLang: "en-gb",
            href: "https://topfeed.live/feed/gb/1",
          },
          {
            hrefLang: "es-ve",
            href: "https://topfeed.live/feed/ve/1",
          },
        ]}
      />
      <div className="page-container">
        <Toolbar />
        <Country />
        <h3 className={styles.countryFeed}>Morocco Feed</h3>
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
                router.push(`/feed/ma/${pageNumber - 1}`);
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
                router.push(`/feed/ma/${pageNumber + 1}`);
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
    `https://newsapi.org/v2/top-headlines?country=ma&pageSize=5&page=${pageNumber}`,
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
