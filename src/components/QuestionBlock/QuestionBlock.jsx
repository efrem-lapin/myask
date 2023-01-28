import AvatarLink from "../AvatarLink/AvatarLink";
import QuestionInfo from "../QuestionInfo/QuestionInfo";

import styles from "./QuestionBlock.module.scss";

const QuestionBlock = ({avatarInfo, questionInfo}) => {
  return (
    <div className={styles.questionBlock}>
      <AvatarLink info={avatarInfo} />
      <QuestionInfo info={questionInfo} />
    </div>
  );
};

export default QuestionBlock;
