import StatusBlock from "../StatusBlock/StatusBlock";
import cx from "classnames";
import UserAvatar from "../UserAvatar/UserAvatar";
import CounterPanel from "../CounterPanel/CounterPanel";

import styles from "./UserInfo.module.scss";

const UserInfo = ({ user, amountAnswers, amountSubs, amountLikes }) => {
  return (
    <div className={styles.userInfo}>
      <div className={cx(styles.side, styles.adaptive)}>
        <UserAvatar avatar={user.avatar} />
        <div className="container">
          <div className={styles.info}>
            <div className={styles.text}>
              <div className={styles.nameBlock}>
                <span className={styles.name}>{user?.name}</span>
                <span className={styles.name}>{user?.surname}</span>
              </div>
              <StatusBlock status={user.status} id={user.id} />
            </div>
            <CounterPanel
              answers={amountAnswers}
              subs={amountSubs}
              likes={amountLikes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
