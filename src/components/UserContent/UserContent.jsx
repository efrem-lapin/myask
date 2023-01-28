import ListAnswers from "../ListAnswers/ListAnswers";
import WarningImage from "../WarningImage/WarningImage";

import styles from "./UserContent.module.scss";

function UserContent({ listAnswers, title, warningText, isSelf }) {
  return (
    <div className="container">
      <div className={styles.content}>
        {listAnswers.length ? (
          <>
            <h2 className="section__title">{title}</h2>
            <ListAnswers list={listAnswers} isSelf={isSelf} />
          </>
        ) : (
          <div className={styles.warning}>
            <WarningImage text={warningText} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UserContent;
