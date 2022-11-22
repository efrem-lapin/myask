import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { regUser } from "../../actions/user";
import { setUser } from "../../store/slices/UserSlice";
import InputLabel from "../InputLabel/InputLabel";
import Loader from "../Loader/Loader";

import styles from "./SignForm.module.scss";

const SignForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [surname, setSurname] = useState("");

  const dispatch = useDispatch();

  async function registration(e, userData) {
    e.preventDefault();
    setIsLoading(true);
    const res = await regUser(userData);

    if (res.data) {
      setIsLoading(false);
      dispatch(setUser(res.data.user))
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
        setValue={setName}
      />
      <InputLabel
        labelText="Фамилия"
        type="text"
        placeholder="Введите фамилию"
        setValue={setSurname}
      />
      <InputLabel
        labelText="E-mail"
        type="email"
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
        onClick={(e) => registration(e, { name, surname, email, password })}
      >
        Зарегистрироваться
      </button>
    </form>
  );
};

export default SignForm;
