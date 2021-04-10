import { Toolbar } from "../components/toolbar";
import Form from "../components/form";
import styles from "../styles/Search.module.css";

const eom = ({ employee }) => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <Form />
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const searchValue = pageContext.searchValue;

  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&from=2021-04-09&to=2021-04-09&sortBy=popularity&apiKey=${process.env.NEXT_PUBLIC_NEWS_KEY}`
  );
  const employee = await apiResponse.json();

  console.log(apiResponse);

  return {
    props: {
      employee,
    },
  };
};

export default eom;
