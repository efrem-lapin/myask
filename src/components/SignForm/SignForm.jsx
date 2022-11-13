import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { regUser, loginUser } from "../../actions/user";
import { InputLabel } from "../InputLabel/InputLabel";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/UserSlice";

import styles from "./SignForm.module.scss";
import Spinner from "../Spinner/Spinner";

const SignForm = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const textButton = {
    reg: "Зарегистрироваться",
    login: "Войти",
  };
  async function login(e, email, password) {
    setIsLoading(true);
    const res = await loginUser(e, email, password);
    if (res) {
      setIsLoading(false);
      window.localStorage.setItem("token", res.token.accessToken);
      dispatch(setUser(res));
      nav(`/my`);
    }
  }

  async function registration(e, name, email, password) {
    setIsLoading(true);
    const res = await regUser(e, name, email, password);// Тут нужно будет вернуть пользователя и записать его сессию
    if (res) {
      setIsLoading(false);
    }
  }
  return (
    <form className={styles.form}>
      {isLoading && <div className={styles.loader}><Spinner /></div>}
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
            : (e) => registration(e, name, email, password)
        }
      >
        {textButton[type]}
      </button>
    </form>
  );
};

export default SignForm;
