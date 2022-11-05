import React from "react";

import styles from "./QuestionInfo.module.scss"

function QuestionInfo({ name, question }) {
  return (
    <div className={styles.info}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.question}>{question}</p>
    </div>
  );
}

export default QuestionInfo;