import React from "react";

import styles from "./AnswerSkeleton.module.scss";

function AnswerSkeleton() {
  return (
    <div className={styles.item}>
      <div className={styles.user}>
        <div className={styles.avatarSmall}></div>
        <div className={styles.text}>
          <div className={styles.nameSmall}></div>
          <div className={styles.nameSmall}></div>
        </div>
      </div>
      <div className={styles.answer}></div>
    </div>
  );
}

export default AnswerSkeleton;
