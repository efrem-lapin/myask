import React from "react";
import ListQuestionItem from "../ListQuestionItem/ListQuestionItem";


import styles from "./ListQuestions.module.scss";

function ListQuestions({ questions = [] }) {
  return (
    <div className={styles.list}>
      {questions.map((question, index) => (
        <ListQuestionItem key={index} questionInfo={question}/> 
      ))}
    </div>
  );
}

export default ListQuestions;
