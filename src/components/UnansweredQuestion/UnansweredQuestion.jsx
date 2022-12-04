import React from "react";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import IconButton from "../IconButton/IconButton";
import { useDispatch } from 'react-redux';
import { deleteQuestion } from "../../store/slices/ListQuestionsSlice";

import styles from "./UnansweredQuestion.module.scss";

const UnansweredQuestion = ({question}) => {
  const dispatch = useDispatch();

  function removeQuestion(e) {
    e.stopPropagation();
    dispatch(deleteQuestion(question.id));
  }

  return (
    <div className={styles.unasweredQuestion}>
      <div className={styles.separator}>
        <QuestionBlock
          avatarInfo={{ ...question.questionerData }}
          questionInfo={question}
        />
      </div>
      <IconButton icon="cross" clickCallback={(e) => removeQuestion(e)} />
    </div>
  );
};

export default UnansweredQuestion;
