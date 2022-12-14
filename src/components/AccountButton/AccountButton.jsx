import React, { useState, useRef } from "react";
import Avatar from "../Avatar/Avatar";
import AccountMenu from "../AccountMenu/AccountMenu";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import styles from "./AccountButton.module.scss";

function AccountButton() {
  const [isDrop, setISDrop] = useState(false);
  const menuRef = useRef(null);

  const img = useSelector((state) => state.user.data.avatar);

  function clickOutside(e) {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(menuRef.current)) {
      setISDrop(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("click", clickOutside);
    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  function toggleList() {
    setISDrop((prev) => !prev);
  }

  return (
    <>
      <button className={styles.btn} onClick={toggleList} ref={menuRef}>
        <Avatar size={35} src={img} />
      </button>
      <CSSTransition
        in={isDrop}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: styles.animationActive,
          enterDone: styles.animationDone,
          exitActive: styles.animationExit,
          exitDone: styles.animationExitActive,
        }}
      >
        <AccountMenu />
      </CSSTransition>
    </>
  );
}

export default AccountButton;
