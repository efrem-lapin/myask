import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AnswerField from "../AnswerField/AnswerField";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import Avatar from "../Avatar/Avatar";
import styles from "./ListQuestionItem.module.scss";
import cx from "classnames";

function ListQuestionItem({ username, question, id, avatar }) {
  const [isField, setIsField] = useState(false);
  const answerFieldRef = React.useRef(null);

  return (
    <div className={styles.listItem}>
      <div
        className={isField ? cx(styles.wrapper, styles.active) : styles.wrapper}
        onClick={() => setIsField((prev) => !prev)}
      >
        <div className={styles.separator}>
          <div className={styles.avatarWrapper}>
            <Avatar size={44} src={avatar} />
          </div>
          <QuestionInfo name={username} question={question} />
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
        timeout={300}
        unmountOnExit
      >
        <AnswerField
          close={() => setIsField(false)}
          ref={answerFieldRef}
          idQuestion={id}
        />
      </CSSTransition>
    </div>
  );
}

export default ListQuestionItem;
