import Logo from "../Logo/Logo";
import SignUpPanel from "../SignUpPanel/SignUpPanel";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <SignUpPanel />
        </div>
      </div>
    </header>
  );
};

export default Header;
