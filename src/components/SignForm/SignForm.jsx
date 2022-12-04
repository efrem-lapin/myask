import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { regUser } from "../../actions/user";
import { setUser } from "../../store/slices/UserSlice";
import InputLabel from "../InputLabel/InputLabel";
import Loader from "../Loader/Loader";

import styles from "./SignForm.module.scss";

const SignForm = () => {
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const password = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  async function registration(e, userData) {
    e.preventDefault();

    setIsLoading(true);
    
    const res = await regUser(userData);

    if (res.data) {
      setIsLoading(false);
      dispatch(setUser(res.data.user));
      console.log(res.data.message);
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
        labelText="Имя"
        type="text"
        placeholder="Введите имя"
        setValue={(e) => (name.current = e.target.value)}
      />
      <InputLabel
        labelText="Фамилия"
        type="text"
        placeholder="Введите фамилию"
        setValue={(e) => (surname.current = e.target.value)}
      />
      <InputLabel
        labelText="E-mail"
        type="email"
        placeholder="Введите e-mail"
        setValue={(e) => (email.current = e.target.value)}
      />
      <InputLabel
        labelText="Пароль"
        type="password"
        placeholder="Введите пароль"
        setValue={(e) => (password.current = e.target.value)}
      />
      <button
        className={styles.button}
        onClick={(e) =>
          registration(e, {
            name: name.current,
            surname: surname.current,
            email: email.current,
            password: password.current,
          })
        }
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default SignForm;
