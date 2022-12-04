import React, { useState } from "react";
import InputLabel from "../InputLabel/InputLabel";
import { loginUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/UserSlice";
import Loader from "../Loader/Loader";

import styles from "./LoginForm.module.scss";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();

  async function login(e, userData) {
    e.preventDefault();
    setIsLoading(true);
    const res = await loginUser(userData);
    if (res.status === 200) {
      setIsLoading(false);
      dispatch(setUser(res.user));
      nav(`/my`);
    }
  }
  return (
    <form className={styles.form}>
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      <InputLabel
        labelText="E-mail"
        type="text"
        placeholder="Введите e-mail"
        setValue={setEmail}
      />
      <InputLabel
        labelText="Пароль"
        type="password"
        placeholder="Введите пароль"
        setValue={setPassword}
      />
      <button
        className={styles.button}
        onClick={(e) => login(e, {email, password})}
      >
        Войти
      </button>
    </form>
  );
}

export default LoginForm;
