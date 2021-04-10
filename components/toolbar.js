import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
  const router = useRouter();
  let feed = router.pathname.split("/").includes("feed");
  let home = router.pathname === "/";

  return (
    <div className={styles.main}>
      {home ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/")}
        >
          Home
        </div>
      ) : (
        <div onClick={() => router.push("/")}>Home</div>
      )}

      {feed ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/feed/1")}
        >
          Feed
        </div>
      ) : (
        <div onClick={() => router.push("/feed/1")}>Feed</div>
      )}

      <div onClick={() => router.push("/eom")}>EOM</div>
      <div onClick={() => (window.location.href = "https://www.google.com")}>
        Twitter
      </div>
    </div>
  );
};
