import React from "react";
import ListQuestionItem from "../ListQuestionItem/ListQuestionItem";


import styles from "./ListQuestions.module.scss";

function ListQuestions({ questions = [] }) {
  return (
    <div className={styles.list}>
      {questions.map((item, index) => (
        <ListQuestionItem key={index} name={item.name} question={item.question}/> 
      ))}
    </div>
  );
}

export default ListQuestions;
