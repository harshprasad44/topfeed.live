import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  let feed = router.pathname.split("/").includes("feed");
  let home = router.pathname === "/";
  let search = router.pathname.split("/").includes("search");

  return (
    <div className={styles.main}>
      {home ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/")}
        >
          <img src="/home.png" alt="home icon for topfeed" />
          Home
        </div>
      ) : (
        <div onClick={() => router.push("/")}>
          {" "}
          <img src="/home.png" alt="home icon for topfeed" />
          Home
        </div>
      )}

      {feed ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/feed/1")}
        >
          <img src="/globe.png" alt="globe icon for topfeed" />
          Feed
        </div>
      ) : (
        <div onClick={() => router.push("/feed/1")}>
          <img src="/globe.png" alt="globe icon for topfeed" />
          Feed
        </div>
      )}

      {search ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/search")}
        >
          <img src="/search.png" alt="search icon for topfeed" />
          Search
        </div>
      ) : (
        <div onClick={() => router.push("/search")}>
          <img src="/search.png" alt="search icon for topfeed" />
          Search
        </div>
      )}

      <div
        onClick={() =>
          window.open(`https://harshprasad.com/contact.php`, "_blank")
        }
      >
        <img src="/contact.png" alt="contact icon for topfeed" />
        Contact
      </div>
    </div>
  );
};
