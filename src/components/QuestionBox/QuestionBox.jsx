import Avatar from "../Avatar/Avatar";
import QuestionInfo from "../QuestionInfo/QuestionInfo";

import styles from "./QuestionBox.module.scss";

const QuestionBox = ({ userInfo }) => {
  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <Avatar size={44} />
        </div>
        <QuestionInfo name={userInfo.name} question={userInfo.question} />
      </div>
      <div className={styles.answer}>{userInfo.answer}</div>
    </div>
  );
};

export default QuestionBox;
