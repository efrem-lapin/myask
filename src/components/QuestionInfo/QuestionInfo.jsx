import React from "react";
import { Link } from "react-router-dom";

import styles from "./QuestionInfo.module.scss";

function QuestionInfo({ info }) {
  return (
    <div className={styles.info}>
      <Link className={styles.nameWrapper} to={`/id${info.id}`}>
        <h3 className={styles.name}>{info.name}</h3>
        <h3 className={styles.name}>{info.surname}</h3>
      </Link>
      <p className={styles.question}>{info.question}</p>
    </div>
  );
}

export default QuestionInfo;
