import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img className={styles.img} src="./assets/img/logo.png" alt="логотип" />
      MyASK.ru
    </Link>
  );
};

export default Logo;
