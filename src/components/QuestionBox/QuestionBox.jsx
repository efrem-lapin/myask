import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import QuestionInfo from "../QuestionInfo/QuestionInfo";
import IconLib from "../../services/icons";

import styles from "./QuestionBox.module.scss";

const QuestionBox = ({ userInfo }) => {
  const lib = new IconLib();
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
      {/* <p>145</p> */}
      <button className={styles.likeButton}>{lib.getIcon("like")}</button>
    </div>
  );
};

export default QuestionBox;
