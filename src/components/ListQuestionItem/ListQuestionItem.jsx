import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import AnswerField from "../AnswerField/AnswerField";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import cx from "classnames";
import IconLib from "../../services/icons";
import axios from "axios";
import Loader from "../Loader/Loader";
import { removeQuestion } from "../../store/slices/ListQuestionsSlice";
import { useDispatch } from "react-redux";
import $api from "../../http/index";

import styles from "./ListQuestionItem.module.scss";
import { useEffect } from "react";

const ListQuestionItem = ({ questionInfo }) => {
  const [isField, setIsField] = useState(false);
  const [profile, setProfile] = useState({});
  const { question, questionerId, id } = questionInfo;
  const answerFieldRef = React.useRef(null);
  const lib = new IconLib();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    $api
      .get(`${process.env.REACT_APP_HOST}/api/user/${questionerId}`)
      .then((res) => setProfile(res.data));
  }, [questionerId]);

  function removeItem(e, id) {
    e.stopPropagation();

    setIsLoading(true);

    $api
      .post(`${process.env.REACT_APP_HOST}/api/remove`, {
        id,
      })
      .then(() => dispatch(removeQuestion(id)))
      .then(() => setIsLoading(false));
  }

  return (
    <div className={styles.listItem}>
      <div
        className={isField ? cx(styles.wrapper, styles.active) : styles.wrapper}
        onClick={() => setIsField((prev) => !prev)}
      >
        <div className={styles.separator}>
          <QuestionBlock
            avatarInfo={{ avatar: profile.avatar, id: profile.id }}
            questionInfo={{
              question,
              name: profile.name,
              surname: profile.surname,
              id: profile.id,
            }}
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <button className={styles.trash} onClick={(e) => removeItem(e, id)}>
            {lib.getIcon("trash")}
          </button>
        )}
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
};

export default ListQuestionItem;
