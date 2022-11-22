import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logo/Logo";
import SignUpPanel from "../SignUpPanel/SignUpPanel";
import AccountButton from "../AccountButton/AccountButton";

import styles from "./Header.module.scss";


const Header = () => {
  const user = useSelector((state) => state.user.data.id);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          {user ? <AccountButton /> : <SignUpPanel />}
        </div>
      </div>
    </header>
  );
};

export default Header;
