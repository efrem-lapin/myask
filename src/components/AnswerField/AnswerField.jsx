import React from "react";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../../store/slices/ListQuestionsSlice";
import Spinner from "../Spinner/Spinner";
import { postAnswer } from "../../actions/answer";

import styles from "./AnswerField.module.scss";

const AnswerField = React.forwardRef(({ close, idQuestion }, ref) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function handleArea(e) {
    setAnswer(e.target.value);
  }

  async function post(answer, idQuestion) {
    setIsLoading(true);
    const res = await postAnswer(answer, idQuestion);
    if (res.status === 200) {
      dispatch(removeQuestion(idQuestion));
      setIsLoading(false);
      close();
    }
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
          <button
            className={styles.btn}
            onClick={() => post(answer, idQuestion)}
          >
            Ответить
          </button>
        </>
      )}
    </div>
  );
});

export default AnswerField;
