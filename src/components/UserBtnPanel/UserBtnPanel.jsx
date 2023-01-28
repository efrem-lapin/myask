import QuestionField from "../QuestionField/QuestionField";
import { useState, useEffect } from "react";
import $api from "../../http";
import { useSelector, useDispatch } from "react-redux";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";
import { addSubs, removeSubs } from "../../store/slices/UserSlice";

import styles from "./UserBtnPanel.module.scss";

const UserBtnPanel = ({ id, subs }) => {
  const [isShowQF, setIsShowQF] = useState(false);
  const myId = useSelector((state) => state.auth.data.id);
  const [isSubs, setIsSubs] = useState(false);
  const dispatch = useDispatch();

  async function subscribe(subscriber, user) {
    const res = await $api.post(`${process.env.REACT_APP_HOST}/api/subscribe`, {
      subscriber,
      user,
    });

    if (res.status === 200) {
      if (isSubs) dispatch(removeSubs(subscriber));
      else dispatch(addSubs(subscriber));
      setIsSubs((prev) => !prev);
    }
  }

  useEffect(() => {
    const isSub =
      subs.findIndex((sub) => Number(sub.subscriber) === Number(myId)) !== -1;
    if (isSub) setIsSubs(true);
  }, [myId, subs]);

  return (
    <>
      <div className="container">
        <div className={styles.panel}>
          <button
            className={cx(styles.btn, styles.btnSecond)}
            onClick={() => setIsShowQF((prev) => !prev)}
          >
            Задать вопрос
          </button>
          <button
            className={styles.btn}
            onClick={() => subscribe(Number(myId), Number(id))}
          >
            {isSubs ? "Отписаться" : "Подписаться"}
          </button>
        </div>
      </div>
      <CSSTransition
        in={isShowQF}
        timeout={300}
        classNames={{
          enterActive: styles.animationActive,
          enterDone: styles.animationDone,
          exitActive: styles.animationExit,
          exitDone: styles.animationExitActive,
        }}
        mountOnEnter
        unmountOnExit
      >
        <QuestionField answerer={id} close={() => setIsShowQF(false)} />
      </CSSTransition>
    </>
  );
};

export default UserBtnPanel;
