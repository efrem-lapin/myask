import UserInfo from "../UserInfo/UserInfo";
import UserBtnPanel from "../UserBtnPanel/UserBtnPanel";
import cx from "classnames";

import styles from "./UserHeader.module.scss";

function UserHeader({ user, id, btns, amountAnswers, subs, amountSubs, amountLikes}) {
  return (
    <div className={cx("container", "mobileNonContainer", styles.userHeader)}>
      <div className={styles.background}>
        <UserInfo user={user} amountAnswers={amountAnswers} amountSubs={amountSubs} amountLikes={amountLikes}/>
        {btns && <UserBtnPanel id={id} subs={subs}/>}
      </div>
    </div>
  );
}

export default UserHeader;
