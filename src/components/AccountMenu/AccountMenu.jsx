import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IconLib from "../../services/icons";

import styles from "./AccountMenu.module.scss";

const AccountMenu = React.forwardRef((props, ref) => {
  const userId = useSelector((state) => state.user.id);
  const icons = new IconLib();

  React.useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.path.includes()) {

      }
    })
  }, [])

  const accountMenuItems = [
    {
      id: "aci1",
      title: "Мой аккаунт",
      link: `/user${userId}`,
      icon: "user",
    },
    {
      id: "aci2",
      title: "Вопросы",
      link: "/questions",
      icon: "question",
    },
    {
      id: "aci3",
      title: "Настройки",
      link: "/settings",
      icon: "settings",
    },
    {
      id: "aci4",
      title: "Выйти",
      link: "/logout",
      icon: "logout",
    },
  ];

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
