import WarningImage from "../WarningImage/WarningImage";
import ListQuestions from "../ListQuestions/ListQuestions";

import styles from "./QuestionContent.module.scss";

function QuestionsContent({ listQuestions }) {
  return (
    <div className={styles.questionContent}>
      {listQuestions.length ? (
        <>
          <ListQuestions questions={listQuestions} />
        </>
      ) : (
        <WarningImage text="У вас нет вопросов" />
      )}
    </div>
  );
}

export default QuestionsContent;
