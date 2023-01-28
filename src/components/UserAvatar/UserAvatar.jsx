import Avatar from "./../Avatar/Avatar";

import styles from "./UserAvatar.module.scss";

const UserAvatar = ({ avatar }) => {
  return (
    <div className={styles.userAvatar}>
      <div className={styles.background} style={{backgroundImage: `url(${avatar})`}}>
      </div>
      <div className={styles.avatarWrapper}>
          <Avatar src={avatar} />
        </div>
    </div>
  );
};

export default UserAvatar;
