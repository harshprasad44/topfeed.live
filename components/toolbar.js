import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGlobe,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon icon={faHome} /> Home
        </div>
      ) : (
        <div onClick={() => router.push("/")}>
          <FontAwesomeIcon icon={faHome} /> Home
        </div>
      )}

      {feed ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/feed/1")}
        >
          <FontAwesomeIcon icon={faGlobe} /> Feed
        </div>
      ) : (
        <div onClick={() => router.push("/feed/1")}>
          <FontAwesomeIcon icon={faGlobe} /> Feed
        </div>
      )}

      {search ? (
        <div
          style={{ marginBottom: "1px", borderBottom: "black solid" }}
          onClick={() => router.push("/search")}
        >
          <FontAwesomeIcon icon={faSearch} /> Search
        </div>
      ) : (
        <div onClick={() => router.push("/search")}>
          <FontAwesomeIcon icon={faSearch} /> Search
        </div>
      )}

      <div
        onClick={() =>
          window.open(`https://harshprasad.com/contact.php`, "_blank")
        }
      >
        <FontAwesomeIcon icon={faUser} /> Contact
      </div>
    </div>
  );
};
