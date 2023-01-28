import styles from "./WarningMessage.module.scss";

const WarningMessage = ({ text }) => {
  return (
    <div className={styles.message}>
      <img className={styles.img} src="./assets/img/warning.svg" alt="warning" />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default WarningMessage;
