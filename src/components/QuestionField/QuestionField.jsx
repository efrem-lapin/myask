import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./QuestionField.module.scss";

const QuestionField = ({ answerer }) => {
  const [question, setQuestion] = React.useState("");
  const questioner = useSelector((state) => state.user);

  function postQuestion() {
    axios.post("http://localhost:3001/api/ask", {
      questioner: questioner.id,
      question,
      answerer,
    }).then(res => alert(res.data.message));
  }

  return (
    <div className={styles.field}>
      <input
        type="textarea"
        className={styles.input}
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
        placeholder="Задайте вопрос"
      />
      <button className={styles.button} onClick={postQuestion}>Спросить</button>
    </div>
  );
};

export default QuestionField;
