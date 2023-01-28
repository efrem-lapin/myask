import { useState } from "react";
import InputLabel from "../InputLabel/InputLabel";
import { loginUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import Token from "./../../services/token";
import { Formik } from "formik";
import { validateLogin } from "../../services/validate";
import { fetchAuth } from './../../store/slices/AuthSlice';

import styles from "./LoginForm.module.scss";

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigate();

  async function login(values) {
    setIsLoading(true);

    const res = await loginUser(values);

    if (res.error) {
      setIsLoading(false);
      setErrorMessage(res.error);

      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }

    if (res.user.id) {
      setIsLoading(false);
      Token.setToken(res.token);
      dispatch(fetchAuth());
      nav(`/id${res.user.id}`);
    }
  }

  return (
    <Formik initialValues={{ email: "", password: "" }} validate={validateLogin} onSubmit={login}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          {isLoading && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
          <InputLabel
            labelText="Email"
            placeholder="Введите email"
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <InputLabel
            labelText="Пароль"
            placeholder="Введите пароль"
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Войти
          </button>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
