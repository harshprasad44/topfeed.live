import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Form.module.css";

const form = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState();

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={styles.example}
      style={{ margin: "auto", maxWidth: "400px", paddingTop: "20px" }}
    >
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Search..."
        name="search2"
        required
      />
      <button
        type="submit"
        onClick={(e) => router.push(`/search/${searchValue}/1`)}
      >
        <img src="/search.png" alt="search icon for topfeed" />
      </button>
    </form>
  );
};

export default form;
