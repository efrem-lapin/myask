import { useState } from "react";
import SignForm from "../SignForm/SignForm";
import LoginForm from "../LoginForm/LoginForm";

import styles from "./SignBox.module.scss";

const SignBox = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  return (
    <div className={styles.box}>
      <div className={styles.inner}>
        {isLoginForm ? (
          <>
            <h2 className={styles.title}>Вход</h2>
            <LoginForm />
            <button
              onClick={() => setIsLoginForm(false)}
              className={styles.buttonText}
            >
              или зарегистрируйтесь
            </button>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Регистрация</h2>
            <SignForm />
            <button
              onClick={() => setIsLoginForm(true)}
              className={styles.buttonText}
            >
              у вас есть аккаунт?
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignBox;
