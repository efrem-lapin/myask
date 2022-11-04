import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AccountMenu.scss";

const AccountMenu = () => {
  const userId = useSelector((state) => state.user.id);

  const accountMenuItems = [
    { id: "aci1", title: "Мой аккаунт", link: `/user${userId}` },
    { id: "aci2", title: "Вопросы", link: "/questions" },
    { id: "aci3", title: "Настройки", link: "/settings" },
    { id: "aci4", title: "Выйти", link: "/logout" },
  ];

  return (
    <ul className="account_menu">
      {accountMenuItems.map((item) => (
        <li className="account_menu__item" key={item.id}>
          <Link className="account_menu__link" to={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AccountMenu;
