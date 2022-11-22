import React from "react";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../../store/slices/ListQuestionsSlice";
import Spinner from "../Spinner/Spinner";
import $api from "../../http";

import styles from "./AnswerField.module.scss";

const AnswerField = React.forwardRef(({ close, idQuestion }, ref) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleArea(e) {
    setAnswer(e.target.value);
  }

  function postAnswer() {
    setIsLoading(true);
    $api
      .post(`${process.env.REACT_APP_HOST}/api/answer`, {
        answer,
        id: idQuestion,
      })
      .then(() => dispatch(removeQuestion(idQuestion)))
      .then(() => setIsLoading(false))
      .then(() => close());
  }

  return (
    <div className={styles.field} ref={ref}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <textarea
            className={styles.textarea}
            onChange={(e) => handleArea(e)}
          ></textarea>
          <button className={styles.btn} onClick={postAnswer}>
            Ответить
          </button>
        </>
      )}
    </div>
  );
});

export default AnswerField;
