import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ src = "./assets/img/default_avatar.jpg", size }) => {
  // const base64 = window.btoa(src);
  const newSRC = `data:image/jpg;base64,${src}`;
  
  return (
    <div className={styles.avatar} style={{width: `${size}px`, height: `${size}px`}}>
      <img className={styles.img} alt="аватар" src={newSRC}/>
    </div>
  );
};
export default Avatar;
