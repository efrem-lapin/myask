import { useState } from "react";
import Logo from "../Logo/Logo";
import SignUpPanel from "../SignUpPanel/SignUpPanel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import AccountMenu from "../AccountMenu/AccountMenu";

import "./Header.scss";


const Header = () => {
  const user = useSelector(state => state.user.id);
  const [isDrop, setISDrop] = useState(false);

  function toggleList() {
    setISDrop(prev => !prev);
  }
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          {user ? <div className="account_btn" onClick={toggleList}><Avatar /></div> : <SignUpPanel />} 
          {isDrop && <AccountMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
