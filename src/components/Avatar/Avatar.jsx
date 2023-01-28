import styles from "./Avatar.module.scss";

const Avatar = ({ src }) => {
  return (
    <div
      className={styles.avatar}
      style={{
        backgroundImage: `url(${src ? src : "./assets/img/default_avatar.jpg"})`,
      }}
    ></div>
  );
};
export default Avatar;
