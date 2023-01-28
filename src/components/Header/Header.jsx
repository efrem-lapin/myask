import FooterMenu from "../FooterMenu/FooterMenu";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <FooterMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
