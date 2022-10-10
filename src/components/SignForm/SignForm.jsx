import { useState } from "react";
import { regUser, loginUser } from "../../actions/user";
import { InputLabel } from "../InputLabel/InputLabel";

import "./SignForm.scss";

const SignForm = ({ type }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const textButton = {
    reg: "Зарегистрироваться",
    login: "Войти",
  };

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
            ? (e) => loginUser(e, email, password)
            : (e) => regUser(e, name, email, password)
        }
      >
        {textButton[type]}
      </button>
    </form>
  );
};

export default SignForm;
