import AnswerBlock from "../AnswerBlock/AnswerBlock";

import styles from "./ListAnswers.module.scss";

const ListAnswers = ({ list, isSelf }) => {
  return (
    <div className={styles.list}>
      <div className={styles.inner}>
        {list.map((answer, index) => (
          <AnswerBlock answer={answer} key={index} isSelf={isSelf}/>
        ))}
      </div>
    </div>
  );
};

export default ListAnswers;
