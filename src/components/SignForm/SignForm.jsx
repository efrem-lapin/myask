import { useState } from "react";
import { regUser, loginUser } from "../../actions/user";
import { InputLabel } from "../InputLabel/InputLabel";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/UserSlice";

import "./SignForm.scss";

const SignForm = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const textButton = {
    reg: "Зарегистрироваться",
    login: "Войти",
  };

  async function login(e, email, password) {
    const res = await loginUser(e, email, password);
    console.log(res);
    dispatch(setUser(res.data))
  }

  return (
    <form className="form">
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
        className="form__button"
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
