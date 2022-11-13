import QuestionBox from "../QuestionBox/QuestionBox";

import styles from "./ListAnswers.module.scss";

const ListAnswers = ({ questions }) => {
  return (
    <div className={styles.list}>
      <div className={styles.inner}>
        {questions.map((item, index) => (
          <QuestionBox userInfo={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ListAnswers;
