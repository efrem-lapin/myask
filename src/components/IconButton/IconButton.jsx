import IconLib from "../../services/icons";
import classNames from "classnames";

import styles from "./IconButton.module.scss";

function IconButton({ icon, clickCallback, active }) {
  const lib = new IconLib();
  return (
    <button className={active ? classNames(styles.btn, styles.active) : styles.btn} onClick={clickCallback}>
      {lib.getIcon(icon)}
    </button>
  );
}

export default IconButton;
