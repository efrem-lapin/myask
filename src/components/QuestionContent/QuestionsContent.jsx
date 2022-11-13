import React from "react";
import WarningImage from "../WarningImage/WarningImage";
import ListQuestions from "../ListQuestions/ListQuestions";

import styles from "./QuestionContent.module.scss";

function QuestionsContent({ listQuestions }) {
  return (
    <div className="container mobileNonContainer">
      <div className={styles.background}>
        {listQuestions.length ? (
          <>
            <h2 className={styles.title}>Мои вопросы:</h2>
            <ListQuestions questions={listQuestions} />
          </>
        ) : (
          <WarningImage text="У вас нет вопросов" />
        )}
      </div>
    </div>
  );
}

export default QuestionsContent;
