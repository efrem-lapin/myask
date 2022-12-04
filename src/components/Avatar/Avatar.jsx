import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ src = "./assets/img/default_avatar.jpg"}) => {
  return (
    <div
      className={styles.avatar}
      style={{
        backgroundImage: `url(${src})`,
      }}
    ></div>
  );
};
export default Avatar;
