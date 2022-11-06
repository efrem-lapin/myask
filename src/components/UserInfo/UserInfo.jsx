import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import cx from "classnames";

import styles from "./UserInfo.module.scss";

const UserInfo = ({ user }) => {
  const defaultUser = {
    name: "Имя Пользователя",
    status: "Тут пользователь будет устанавливать статус",
  };

  console.log(user)

  return (
    <div className="container">
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
          <Counter amount="320" title="ответов" />
          <Counter amount="2K" title="подписчиков" />
          <Counter amount="1М" title="лайков" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
