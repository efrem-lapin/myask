import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import styles from "./QuestionField.module.scss";
import { postQuestion } from "./../../actions/question";

const QuestionField = ({ answerer, close }) => {
  const [question, setQuestion] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const questioner = useSelector((state) => state.user.data);

  async function sendQuestion() {
    setIsLoading(true);
    const res = await postQuestion(questioner.id, question, answerer);
    if (res.status === 200) {
      setIsLoading(false);
      close();
    }
  }

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.field} onClick={(e) => e.stopPropagation()}>
        {isLoading ? (
          <Spinner />
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
