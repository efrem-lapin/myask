import { useState, forwardRef} from "react";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../../store/slices/ListQuestionsSlice";
import { postAnswer } from "../../actions/answer";
import QuestionBlock from "./../QuestionBlock/QuestionBlock";
import Loader from './../Loader/Loader';

import styles from "./AnswerField.module.scss";

const AnswerField = forwardRef(({ close, idQuestion, question }, ref) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
    <div className={styles.overlay} onClick={close}>
      <div
        className={styles.field}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.question}>
              <QuestionBlock
                avatarInfo={question.questionerData}
                questionInfo={question}
              />
            </div>
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
    </div>
  );
});

export default AnswerField;
