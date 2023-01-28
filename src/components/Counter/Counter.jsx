import { returnsCorrectWord } from "../../services/utils";

import styles from "./Counter.module.scss";

const Counter = ({ amount, arrWords }) => {
  return (
    <div className={styles.counter}>
      <div className={styles.num}>{amount}</div>  
      <div className={styles.string}>{returnsCorrectWord(amount, arrWords)}</div>
    </div>
  );
};

export default Counter;
