import React from "react";
import IconLib from "../../services/icons";

import styles from "./PopupMessage.module.scss";

function PopupMessage({ message, type }) {
  const icons = new IconLib();
  return (
    <div className="overlay">
      <div className={styles.popupMessage}>
        {type ? icons.getIcon("done") : icons.getIcon("error")}
        <p className={styles.text}>{message}</p>
      </div>
    </div>
  );
}

export default PopupMessage;
