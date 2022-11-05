import { Link } from "react-router-dom";

import styles from "./SignUpPanel.module.scss";

const SignUpPanel = () => {
  return (
    <div className={styles.signup}>
      <Link to="/sign">
        <button className="btn">Войти</button>
        <img
          className={styles.img}
          src="./assets/img/default_avatar.jpg"
          alt="sing icon"
        />
      </Link>
    </div>
  );
};

export default SignUpPanel;
