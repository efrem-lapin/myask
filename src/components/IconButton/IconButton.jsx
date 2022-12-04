import React from "react";
import IconLib from "../../services/icons";

import styles from "./IconButton.module.scss";
import classNames from "classnames";

function IconButton({ icon, clickCallback, active }) {
  const lib = new IconLib();
  return (
    <button className={active ? classNames(styles.btn, styles.active) : styles.btn} onClick={clickCallback}>
      {lib.getIcon(icon)}
    </button>
  );
}

export default IconButton;
