import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ src = "./assets/img/default_avatar.jpg", size }) => {
  return (
    <div
      className={styles.avatar}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundImage: `url(${src})`,
      }}
    ></div>
  );
};
export default Avatar;
