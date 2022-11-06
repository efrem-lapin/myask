import React, { useState, useRef } from "react";
import Avatar from "../Avatar/Avatar";
import AccountMenu from "../AccountMenu/AccountMenu";

import styles from "./AccountButton.module.scss";

function AccountButton() {
  const [isDrop, setISDrop] = useState(false);
  const menuRef = useRef(null);

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
        <Avatar size={35} />
      </button>
      {isDrop && <AccountMenu />}
    </>
  );
}

export default AccountButton;
