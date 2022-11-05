import React from "react";

import styles from "./AnswerField.module.scss";

const AnswerField = ({ close }) => {
  const [answer, setAnswer] = React.useState("");

  function handleArea(e) {
    setAnswer(e.target.value);
  }
  
  return (
      <div className={styles.field}>
        <textarea
          className={styles.textarea}
          onChange={(e) => handleArea(e)}
        ></textarea>
        <button className={styles.btn} onClick={close}>
          Ответить
        </button>
      </div>
  );
};

export default AnswerField;
