import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeleteAnswer } from "../../store/slices/ListAnswersSlice";
import { likeAnswerAction } from "./../../actions/answer";
import { decrLike, incrLike } from "../../store/slices/UserSlice";
import IconButton from "../IconButton/IconButton";

import styles from "./AnswerBlock.module.scss";

const AnswerBlock = ({ isSelf, answer }) => {
  const myId = useSelector((state) => state.auth.data.id);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(answer.likes.length);

  useEffect(() => {
    const isMyLike = !!answer.likes.find((like) => like.likerId === myId);
    setLike(isMyLike);
  }, [answer, myId]);

  async function toggleLike() {
    const res = await likeAnswerAction(answer.id, myId, answer.answerer);
    if (res.status === 200) {
      if (like) {
        setCountLike(prev => --prev);
        dispatch(decrLike());
      }
      else {
        setCountLike(prev => ++prev);
        dispatch(incrLike());
      }
      setLike((prev) => !prev);
    }
  }

  return (
    <div className={styles.answerBlock}>
      <div className={styles.answer}>{answer.answer}</div>
      <div className={styles.footer}>
        <div className={styles.likes}>
          <IconButton
            icon={like ? "solidLike" : "like"}
            clickCallback={isAuth ? toggleLike : null}
            active={like}
          />
          <div className={styles.likeCount}>{countLike || 0}</div>
        </div>
        {isSelf && (
          <IconButton
            icon="trash"
            clickCallback={() => dispatch(fetchDeleteAnswer(answer.id))}
          />
        )}
      </div>
    </div>
  );
};

export default AnswerBlock;
