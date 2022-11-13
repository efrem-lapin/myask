import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import QuestionInfo from "../QuestionInfo/QuestionInfo";

import styles from "./QuestionBox.module.scss";

const QuestionBox = ({ userInfo }) => {
  return (
    <div className={styles.box}>
      <div className={styles.info}>
        <div className={styles.avatarWrapper}>
          <Link to={`/user${userInfo.questioner}`}>
            <Avatar size={44} src={userInfo.avatar} />
          </Link>
        </div>
        <QuestionInfo name={userInfo.username} question={userInfo.question} link={`/user${userInfo.questioner}`}/>
      </div>
      <div className={styles.answer}>{userInfo.answer}</div>
    </div>
  );
};

export default QuestionBox;
