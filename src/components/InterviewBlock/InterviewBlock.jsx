import QuestionBlock from "../QuestionBlock/QuestionBlock";
import styles from "./InterviewBlock.module.scss";
import AnswerBlock from "../AnswerBlock/AnswerBlock";

const InterviewBlock = ({ answer, isSelf }) => {
  return (
    <div className={styles.box}>
      <QuestionBlock
        avatarInfo={{ ...answer.questionerData }}
        questionInfo={answer}
      />
      <AnswerBlock isSelf={isSelf} answer={answer} />
    </div>
  );
};

export default InterviewBlock;
