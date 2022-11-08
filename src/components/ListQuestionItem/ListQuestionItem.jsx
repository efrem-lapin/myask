import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AnswerField from "../AnswerField/AnswerField";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import Avatar from "../Avatar/Avatar";

import styles from "./ListQuestionItem.module.scss";

function ListQuestionItem({ name, question, idQuestion }) {
  const [isField, setIsField] = useState(false);
  const answerFieldRef = React.useRef();

  return (
    <>
      <div
        className={
          isField ? `${styles.wrapper} ${styles.active}` : styles.wrapper
        }
        onClick={() => setIsField((prev) => !prev)}
      >
        <div className={styles.separator}>
          <div className={styles.avatarWrapper}>
            <Avatar size={44} />
          </div>
          <QuestionInfo name={name} question={question} />
        </div>
      </div>

      <CSSTransition
        classNames={{
          enterActive: styles.animationActive,
          enterDone: styles.animationDone,
          exitActive: styles.animationExit,
          exitDone: styles.animationExitActive,
        }}
        in={isField}
        ref={answerFieldRef}
        timeout={0}
        unmountOnExit
      >
        <AnswerField close={() => setIsField(false)} ref={answerFieldRef} idQuestion={idQuestion} />
      </CSSTransition>
    </>
  );
}

export default ListQuestionItem;
