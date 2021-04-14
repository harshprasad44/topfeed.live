import { NextSeo } from "next-seo";
import { Toolbar } from "../components/toolbar";
import Form from "../components/form";
import styles from "../styles/Search.module.css";

const search = ({ employee }) => {
  return (
    <>
      <NextSeo
        title="Top News Feed Live - Search latest news across the globe"
        description="This site allows you to search latest worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals."
        openGraph={{
          site_name: "Top News Feed Live",
          title: "Top News Feed Live - Search latest news across the globe",
          url: "https://topfeed.live/search",
          description:
            "This site allows you to search latest worldwide news online along with titles and images, you can also search news country wise in different languages, providing better search results than other portals.",
        }}
      />
      <div className="page-container">
        <Toolbar />
        <div>
          <h1 className={styles.heading}>Search News worldwide</h1>

          <Form />
        </div>
      </div>
    </>
  );
};

export default search;
