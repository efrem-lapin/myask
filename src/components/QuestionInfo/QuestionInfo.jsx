import React from "react";
import { Link } from "react-router-dom";

import styles from "./QuestionInfo.module.scss";

function QuestionInfo({ info }) {
  return (
    <div className={styles.info}>
      <Link className={styles.nameWrapper} to={`/id${info.questionerData.id}`}>
        <h3 className={styles.name}>{info.questionerData.name}</h3>
        <h3 className={styles.name}>{info.questionerData.surname}</h3>
      </Link>
      <p className={styles.question}>{info.question}</p>
    </div>
  );
}

export default QuestionInfo;
