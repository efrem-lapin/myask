import InterviewBlock from "../InterviewBlock/InterviewBlock";

import styles from "./ListAnswers.module.scss";

const ListAnswers = ({ list, isSelf }) => {
  return (
    <div className={styles.list}>
      <div className={styles.inner}>
        {list.map((answer, index) => (
          <InterviewBlock answer={answer} key={`answer${answer.id}`} isSelf={isSelf}/>
        ))}
      </div>
    </div>
  );
};

export default ListAnswers;
