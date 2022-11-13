import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/slices/PopupMessageSice";
import { removeQuestion } from "../../store/slices/ListQuestions";

import styles from "./AnswerField.module.scss";
import Spinner from "../Spinner/Spinner";

const AnswerField = React.forwardRef(({ close, idQuestion }, ref) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleArea(e) {
    setAnswer(e.target.value);
  }

  function remove(message) {
    removeQuestion(idQuestion);
    dispatch(setMessage({ message }));
  }

  function postAnswer() {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_HOST}/api/answer`, {
        answer,
        id: idQuestion,
      })
      .then((res) => remove(res.data.message))
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
