import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import cx from "classnames";

import styles from "./UserInfo.module.scss";

const UserInfo = ({ user, amountAnswers, amountSubs, amountLikes }) => {
  const defaultUser = {
    name: "Имя",
    surname: "Фамилия",
    status: "Тут пользователь будет устанавливать статус",
  };

  return (
    <div className={styles.userInfo}>
      <div className={cx(styles.side, styles.adaptive)}>
        <div className={styles.avatarWrapper}>
          <Avatar src={user.avatar} />
        </div>
        <div className={styles.text}>
          <div className="">
            <span className={styles.name}>{user?.name || defaultUser.name}</span>
            <span className={styles.name}>
              {user?.surname || defaultUser.surname}
            </span>
          </div>
          <p className={styles.status}>{user?.status || defaultUser.status}</p>
        </div>
      </div>
      <div className={styles.side}>
        <Counter amount={amountAnswers || 0} title="ответов" />
        <Counter amount={amountSubs || 0} title="подписчиков" />
        <Counter amount={amountLikes || 0} title="лайков" />
      </div>
    </div>
  );
};

export default UserInfo;
