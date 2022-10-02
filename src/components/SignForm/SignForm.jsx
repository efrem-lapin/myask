import { useState } from "react";
import { registration } from "../../actions/user";

const SignForm = ({ buttonText }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <form className="form">
      {buttonText === "Зарегистрироваться" ? (
        <label className="form__label">
          <span className="form__text">Имя</span>
          <input
            className="form__input"
            type="text/"
            placeholder="Введите имя"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      ) : null}
      <label className="form__label">
        <span className="form__text">E-mail</span>
        <input
          className="form__input"
          type="email"
          placeholder="Введите e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="form__label">
        <span className="form__text">Пароль</span>
        <input
          className="form__input"
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="form__button" onClick={() => registration(name, email, password)}>
        {buttonText}
      </button>
    </form>
  );
};

export default SignForm;
