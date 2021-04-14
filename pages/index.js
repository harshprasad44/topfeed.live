import { NextSeo } from "next-seo";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Top News Feed Live - Fetch latest news across the globe"
        description="This portal allows you to get worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals."
        openGraph={{
          site_name: "Top News Feed Live",
          title: "Top News Feed Live - Fetch latest news across the globe",
          description:
            "This portal allows you to get worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals.",
          url: "https://topfeed.live/",
        }}
      />
      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <img src="/favicon.png" alt="topfeed.live icon" />
          <h1>Fetch latest news across the globe</h1>
          <h3>
            This portal allows you to get worldwide news online along with
            titles and images, you can also search news country wise in
            different languages, providing better search results than other
            portals. Your one stop shop for the latest news articles.
          </h3>
          <ol>
            <li>
              Click the Feed section and get up to 5 news articles. Use the
              pagination below to fetch more news articles. Select your country
              and language if you wish to.
            </li>
            <li>
              You can also search for news articles by going into Search
              section.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
