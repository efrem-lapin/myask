import React from "react";
import { Link } from "react-router-dom";

import styles from "./QuestionInfo.module.scss"

function QuestionInfo({ name, question, link }) {
  return (
    <div className={styles.info}>
      <Link to={link}><h3 className={styles.name}>{name}</h3></Link>
      <p className={styles.question}>{question}</p>
    </div>
  );
}

export default QuestionInfo;