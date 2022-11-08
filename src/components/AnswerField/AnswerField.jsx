import axios from "axios";
import React from "react";

import styles from "./AnswerField.module.scss";

const AnswerField = ({ close, idQuestion }) => {
  const [answer, setAnswer] = React.useState("");

  function handleArea(e) {
    setAnswer(e.target.value);
  }

  function postAnswer() {
    axios.post(`${process.env.REACT_APP_HOST}/api/answer`, {
      answer,
      id: idQuestion
    })
      .then(res => alert(res.data.message))
      .then(() => close());
  }
  
  return (
      <div className={styles.field}>
        <textarea
          className={styles.textarea}
          onChange={(e) => handleArea(e)}
        ></textarea>
        <button className={styles.btn} onClick={postAnswer}>
          Ответить
        </button>
      </div>
  );
};

export default AnswerField;
