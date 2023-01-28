import { Link } from "react-router-dom";
import IconLib from "./../../services/icons";

import styles from "./FooterMenu.module.scss";

const FooterMenu = () => {
  const icons = new IconLib();
  return (
    <ul className={styles.menu}>
      <li className={styles.item}>
        <Link to="/my">{icons.getIcon("user")}</Link>
      </li>
      <li className={styles.item}>
        <Link to="/questions">{icons.getIcon("question")}</Link>
      </li>
      <li className={styles.item}>
        <Link to="/subs">{icons.getIcon("subs")}</Link>
      </li>
      <li className={styles.item}>
        <Link to="/settings">{icons.getIcon("settings")}</Link>
      </li>
    </ul>
  );
};

export default FooterMenu;
