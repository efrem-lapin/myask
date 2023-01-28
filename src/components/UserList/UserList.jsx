import UserListItem from './../UserListItem/UserListItem';

import styles from "./UserList.module.scss";

const UserList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((user) => (
        <UserListItem key={user.user.id} info={user.user}/>
      ))}
    </ul>
  );
};

export default UserList;
