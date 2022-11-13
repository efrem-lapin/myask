import QuestionField from "../QuestionField/QuestionField";
import { useState } from "react";
import cx from "classnames";
import { CSSTransition } from "react-transition-group";

import styles from "./UserBtnPanel.module.scss";

const UserBtnPanel = ({ id }) => {
  const [isShowQF, setIsShowQF] = useState(false);

  return (
    <div className="mobileContainer">
      <div className={styles.panel}>
        <button
          className={cx(styles.btn, styles.btnLong)}
          onClick={() => setIsShowQF((prev) => !prev)}
        >
          Задать вопрос
        </button>
        <button className={cx(styles.btn)}>Подписаться</button>
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
    </div>
  );
};

export default UserBtnPanel;
