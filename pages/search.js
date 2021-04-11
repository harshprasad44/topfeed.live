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

export default eom;
