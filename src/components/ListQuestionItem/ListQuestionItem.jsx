import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import AnswerField from "../AnswerField/AnswerField";
import UnansweredQuestion from "../UnansweredQuestion/UnansweredQuestion";
import cx from "classnames";

import styles from "./ListQuestionItem.module.scss";

const ListQuestionItem = ({ question }) => {
  const [isField, setIsField] = useState(false);
  const answerFieldRef = useRef(null);

  return (
    <div className={styles.listItem}>
      <div
        className={isField ? cx(styles.wrapper, styles.active) : styles.wrapper}
      >
        <UnansweredQuestion question={question} />
      </div>
      <button
        className={styles.btn}
        onClick={() => setIsField((prev) => !prev)}
      >
        Ответить
      </button>
      <CSSTransition
        classNames={{
          enterActive: styles.animationActive,
          enterDone: styles.animationDone,
          exitActive: styles.animationExit,
          exitDone: styles.animationExitActive,
        }}
        in={isField}
        ref={answerFieldRef}
        timeout={300}
        unmountOnExit
      >
        <AnswerField
          close={() => setIsField(false)}
          ref={answerFieldRef}
          idQuestion={question.id}
          question={question}
        />
      </CSSTransition>
    </div>
  );
};

export default ListQuestionItem;
