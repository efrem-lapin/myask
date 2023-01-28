import styles from "./WarningImage.module.scss";

function WarningImage({ text }) {
  return (
    <div className={styles.box}>
      <img
        className={styles.img}
        src="./assets/img/sad.svg"
        alt="sad smail"
      />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default WarningImage;
