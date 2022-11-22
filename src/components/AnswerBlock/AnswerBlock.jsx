import Avatar from "../Avatar/Avatar";
import IconLib from "../../services/icons";
import { useState } from "react";
import { useEffect } from "react";
import $api from "../../http";
import QuestionBlock from "../QuestionBlock/QuestionBlock";
import { removeAnswer } from "../../store/slices/ListAnswersSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./AnswerBlock.module.scss";

const AnswerBlock = ({ answer, isSelf }) => {
  const dispatch = useDispatch();
  const myId = useSelector((state) => state.user.id);
  const [questioner, setQuestioner] = useState({});
  const [answerer, setAnswerer] = useState({});
  const lib = new IconLib();

  function removeItem(e, answerId) {
    e.preventDefault();
    $api
      .post(`${process.env.REACT_APP_HOST}/api/remove`, { id: answerId })
      .then(() => dispatch(removeAnswer(answerId)));
  }

  function putLike(e, answerId, likerId, answererId) {
    e.preventDefault();

    $api
      .post(`${process.env.REACT_APP_HOST}/api/putlike`, {
        questionId: answerId,
        likerId,
        answererId
      })
      .then(() => 0);
  }

  useEffect(() => {
    $api
      .get(`${process.env.REACT_APP_HOST}/api/user/${answer.questionerId}`)
      .then((res) => setQuestioner(res.data));

    $api
      .get(`${process.env.REACT_APP_HOST}/api/user/${answer.userId}`)
      .then((res) => setAnswerer(res.data));
  }, [answer]);

  return (
    <div className={styles.box}>
      <QuestionBlock
        avatarInfo={{ id: questioner.id, avatar: questioner.avatar }}
        questionInfo={{ ...questioner, question: answer.question }}
      />
      <div className={styles.answerBlock}>
        <div className={styles.avatarWrapper}>
          <Avatar src={answerer.avatar} size={30} />
        </div>
        <div className={styles.answer}>{answer.answer}</div>
        {isSelf ? (
          <button
            className={styles.likeButton}
            onClick={(e) => removeItem(e, answer.id)}
          >
            {lib.getIcon("cross")}
          </button>
        ) : (
          <button
            className={styles.likeButton}
            onClick={(e) => putLike(e, answer.id, myId, answer.id)}
          >
            {lib.getIcon("like")}
          </button>
        )}
      </div>
    </div>
  );
};

export default AnswerBlock;
