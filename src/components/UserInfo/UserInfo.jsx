import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import cx from "classnames";

import styles from "./UserInfo.module.scss";

const UserInfo = ({ user, amountAnswers }) => {
  const defaultUser = {
    name: "Имя Пользователя",
    status: "Тут пользователь будет устанавливать статус",
  };

  return (
      <div className={styles.userInfo}>
        <div className={cx(styles.side, styles.adaptive)}>
          <div className={styles.avatarWrapper}>
            <Avatar size={75} src={user.avatar}/>
          </div>
          <div className={styles.text}>
            <h3 className={styles.name}>{user?.username || defaultUser.name}</h3>
            <p className={styles.status}>{user?.status || defaultUser.status}</p>
          </div>
        </div>
        <div className={styles.side}>
          <Counter amount={amountAnswers || 0} title="ответов" />
          <Counter amount="0" title="подписчиков" />
          <Counter amount="0" title="лайков" />
        </div>
      </div>
  );
};

export default UserInfo;
