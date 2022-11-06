import React from "react";
import { Link } from "react-router-dom";
import IconLib from "../../services/icons";
import accountMenuItems from "../../services/static/acountMenu.json";

import styles from "./AccountMenu.module.scss";

const AccountMenu = React.forwardRef((props, ref) => {
  const icons = new IconLib();

  return (
    <ul className={styles.menu} ref={ref}>
      {accountMenuItems.map((item) => (
        <li className={styles.menuItem} key={item.id}>
          <Link className={styles.link} to={item.link}>
            <div className={styles.icon}>{icons.getIcon(item.icon)}</div>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default AccountMenu;
