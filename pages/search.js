import { Toolbar } from "../components/toolbar";
import Form from "../components/form";
import styles from "../styles/Search.module.css";

const search = ({ employee }) => {
  return (
    <div className="page-container">
      <Toolbar />
      <div>
        <h1 className={styles.heading}>Search News worldwide</h1>

        <Form />
      </div>
    </div>
  );
};

export default search;
