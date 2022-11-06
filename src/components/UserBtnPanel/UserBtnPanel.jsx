import QuestionField from "../QuestionField/QuestionField";
import { useState } from "react";
import cx from "classnames";
import IconLib from "../../services/icons";

import styles from "./UserBtnPanel.module.scss";

const UserBtnPanel = () => {

  const [isShowQF, setIsShowQF] = useState(false)
  const icons = new IconLib();

  return (
    <div className="container">
      <div className={styles.panel}>
        <button 
          className= {cx(styles.btn, styles.btnLong)} 
          onClick={() => setIsShowQF(prev => !prev)}
          >
          {isShowQF ? "Скрыть" : "Задать вопрос"}
        </button>
        <button className={cx(styles.btn, styles.hideMobile)}>Подписаться</button>
      </div>
      {isShowQF && <QuestionField />}
      <button className={cx(styles.btn, styles.showMobile, styles.hideDesktop)}>Подписаться</button>
    </div>
  );
};

export default UserBtnPanel;
