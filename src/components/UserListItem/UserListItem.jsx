import { Link } from "react-router-dom";

import styles from "./UserListItem.module.scss";
import Avatar from './../Avatar/Avatar';

const UserListItem = ({ info }) => {
  return (
    <li className={styles.user}>
      <Link className={styles.nameWrapper} to={`/id${info.id}`}>
        <div className={styles.avatarWrapper}><Avatar src={info.avatar}/></div>
        <h3 className={styles.name}>{info.name}</h3>
        <h3 className={styles.name}>{info.surname}</h3>
      </Link>
    </li>
  );
};

export default UserListItem;
