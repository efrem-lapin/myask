import React from "react";
import { useRef, useState } from "react";
import Logo from "../Logo/Logo";
import SignUpPanel from "../SignUpPanel/SignUpPanel";
import { useSelector } from "react-redux";
import Avatar from "../Avatar/Avatar";
import AccountMenu from "../AccountMenu/AccountMenu";

import styles from "./Header.module.scss";

const Header = () => {
  const user = useSelector((state) => state.user.id);
  const [isDrop, setISDrop] = useState(false);
  const menuRef = React.createRef();

  // React.useEffect(() => {
  //   function clickOutside(e) {
  //     const path = e.path || (e.composedPath && e.composedPath());
  //     if (path.includes(menuRef.current)) {
  //       setISDrop(false);
  //     }
  //   }

  //   document.body.addEventListener("click", clickOutside);
  //   return () => {
  //     document.body.removeEventListener("click", clickOutside);
  //   };
  // }, []);

  function toggleList() {
    setISDrop((prev) => !prev);
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo />
          {user ? (
            <div className={styles.btn} onClick={toggleList}>
              <Avatar size={35} />
            </div>
          ) : (
            <SignUpPanel />
          )}
          {isDrop && <AccountMenu ref={menuRef} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
