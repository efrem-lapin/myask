import styles from "./PageBox.module.scss";

const PageBox = ({ title, children }) => {
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default PageBox;
