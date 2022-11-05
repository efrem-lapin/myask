import React from "react";
import styles from "./QuestionField.module.scss"

const QuestionField = () => {
  
  const [question, setQuestion] = React.useState("")

  return (
    <div className={styles.field}>
      <input 
        type="textarea" 
        className={styles.input} 
        onChange={(e) => setQuestion(e.target.value)} 
        value={question}
        placeholder="Задайте вопрос"
      />
      <button className={styles.button}>Спросить</button>
    </div>
  );
}

export default QuestionField
