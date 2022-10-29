import Logo from "../Logo/Logo";
import SignUpPanel from "../SignUpPanel/SignUpPanel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const user = useSelector(state => state.user.id);
  // дополнить выпадающим списком ЛК
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          {user ? <Link to={`/user${user}`}>Мой профиль</Link> : <SignUpPanel />}
        </div>
      </div>
    </header>
  );
};

export default Header;
