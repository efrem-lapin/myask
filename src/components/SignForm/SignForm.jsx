import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regUser, loginUser } from "../../actions/user";
import { InputLabel } from "../InputLabel/InputLabel";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/UserSlice";

import styles from "./SignForm.module.scss";

const SignForm = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();

  const textButton = {
    reg: "Зарегистрироваться",
    login: "Войти",
  };

  async function login(e, email, password) {
    const res = await loginUser(e, email, password);
    if (res) {
      dispatch(setUser(res));
      nav(`/user${res.id}`);
    }
  }

  return (
    <form className={styles.form}>
      {type === "reg" && (
        <InputLabel
          labelText="Имя"
          type="text"
          placeholder="Введите имя"
          setValue={setName}
        />
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
        onClick={
          type === "login"
            ? (e) => login(e, email, password)
            : (e) => regUser(e, name, email, password)
        }
      >
        {textButton[type]}
      </button>
    </form>
  );
};

export default SignForm;
