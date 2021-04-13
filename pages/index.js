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
          title: "Top News Feed Live",
          description:
            "This portal allows you to get worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals.",
          url: "https://topfeed.live/",
        }}
      />
      <div className="page-container">
        <Toolbar />

        <div className={styles.main}>
          <h1>Next.js News App</h1>
          <h3>Your one stop shop for the latest news articles.</h3>
        </div>
      </div>
    </>
  );
}
