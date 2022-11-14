import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AnswerField from "../AnswerField/AnswerField";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import Avatar from "../Avatar/Avatar";
import styles from "./ListQuestionItem.module.scss";
import cx from "classnames";
import IconLib from "../../services/icons";
import axios from "axios";
import Loader from "../Loader/Loader";

function ListQuestionItem({ username, question, id, avatar }) {
  const [isField, setIsField] = useState(false);
  const answerFieldRef = React.useRef(null);
  const lib = new IconLib();
  const [isLoading, setIsLoading] = useState(false);

  function removeQuestion(e) {
    e.stopPropagation();

    setIsLoading(true); 

    axios.post(`${process.env.REACT_APP_HOST}/api/remove`, {
      id
    }).then(() => setIsLoading(false));
  }

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
        {isLoading ? <Loader />: <button className={styles.trash} onClick={(e) => removeQuestion(e)}>
          {lib.getIcon("trash")} 
        </button>} 
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
