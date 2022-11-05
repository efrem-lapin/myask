import React from "react";

import styles from "./Counter.module.scss";

const Counter = ({ amount, title }) => {
  return (
    <div className={styles.counter}>
      <div className={styles.num}>{amount}</div>  
      <div className={styles.string}>{title}</div>
    </div>
  );
};

export default Counter;
