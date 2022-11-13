import React from "react";
import ListQuestionItem from "../ListQuestionItem/ListQuestionItem";


import styles from "./ListQuestions.module.scss";

function ListQuestions({ questions = [] }) {
  return (
    <div className={styles.list}>
      {questions.map((item, index) => (
        <ListQuestionItem key={index} {...item}/> 
      ))}
    </div>
  );
}

export default ListQuestions;
