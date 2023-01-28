import { useState } from "react";
import { useSelector } from "react-redux";
import { postQuestion } from "./../../actions/question";
import Loader from './../Loader/Loader';

import styles from "./QuestionField.module.scss";

const QuestionField = ({ answerer, close }) => {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const questioner = useSelector((state) => state.auth.data.id);

  async function sendQuestion() {
    setIsLoading(true);
    const res = await postQuestion(questioner, question, answerer);
    if (res.status === 200) {
      setIsLoading(false);
      close();
    }
  }

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.field} onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <input
              type="textarea"
              className={styles.input}
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
              placeholder="Задайте вопрос"
            />
            <div className={styles.buttons}>
              <button className={styles.button} onClick={sendQuestion}>
                Спросить
              </button>
              <button className={styles.button} onClick={close}>
                Закрыть
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuestionField;
