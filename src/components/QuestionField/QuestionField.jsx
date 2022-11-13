import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import styles from "./QuestionField.module.scss";

const QuestionField = ({ answerer, close }) => {
  const [question, setQuestion] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const questioner = useSelector((state) => state.user);

  function postQuestion() {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_HOST}/api/ask`, {
        questioner: questioner.id,
        question,
        answerer,
      })
      .then((res) => console.log(res.data.message))
      .then(() => setIsLoading(false))
      .then(() => close());
  }

  return (
    <div className="overlay">
      <div className={styles.field}>
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
              <button className={styles.button} onClick={postQuestion}>
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
