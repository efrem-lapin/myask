import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../Avatar/Avatar";
import IconButton from "../IconButton/IconButton";
import { likeAnswer, } from "../../actions/answer";
import { deleteAnswer } from "../../store/slices/ListAnswersSlice";

import styles from "./AnswerBlock.module.scss";

const AnswerBlock = ({ isSelf, answer }) => {
  const myId = useSelector((state) => state.user.data.id);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  useEffect(() => {
    const likes = answer.likes;
    const isMyLike = likes.findIndex((like) => like.likerId === myId) !== -1;
    if(isMyLike) setLike(isMyLike);
  }, [answer, myId])

  async function toggleLike() {
    const res = await likeAnswer(answer.id, myId, answer.answerer);
    if (res.status === 200) setLike(prev => !prev);
  }

  return (
    <div className={styles.answerBlock}>
      <div className={styles.avatarWrapper}>
        <Avatar src={answer.answererData.avatar} size={30} />
      </div>
      <div className={styles.answer}>{answer.answer}</div>
      {isSelf ? (
        <IconButton
          icon="cross"
          clickCallback={() => dispatch(deleteAnswer(answer.id))}
        />
      ) : (
        <IconButton
          icon="like"
          clickCallback={toggleLike}
          active={like}
        />
      )}
    </div>
  );
};

export default AnswerBlock;
