import React from "react";
import "./QuestionField.scss"

const QuestionField = () => {
  
  const [question, setQuestion] = React.useState("")

  return (
    <div className="question_field">
      <input 
        type="textarea" 
        className="question_field__input" 
        onChange={(e) => setQuestion(e.target.value)} 
        value={question}
      />
      <button className="question_field__button">Сбросить</button>
    </div>
  );
}

export default QuestionField
