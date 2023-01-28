import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { regUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "./../../store/slices/UserSlice";
import { validateSign } from "./../../services/validate";
import InputLabel from "../InputLabel/InputLabel";
import Loader from "../Loader/Loader";

import styles from "./SignForm.module.scss";

const SignForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [doneMessage, setDoneMessage] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();

  async function registration(values) {
    setIsLoading(true);

    const res = await regUser(values);

    if (res.error) {
      setIsLoading(false);
      setErrorMessage(res.error);
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }

    if (res.data) {
      setIsLoading(false);
      setDoneMessage(res.data.message);

      setTimeout(() => {
        setDoneMessage("");
        dispatch(fetchUser());
        nav("/");
      }, 1000);
    }
  }

  return (
    <Formik
      initialValues={{ name: "", surname: "", email: "", password: "" }}
      validate={validateSign}
      onSubmit={registration}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmiting,
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          {isLoading && (
            <div className={styles.loader}>
              <Loader />
            </div>
          )}
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
          {doneMessage && (
            <div className={styles.doneMessage}>{doneMessage}</div>
          )}
          <InputLabel
            labelText="Имя"
            placeholder="Введите имя"
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />
          <InputLabel
            labelText="Фамилия"
            placeholder="Введите фамилию"
            type="text"
            name="surname"
            value={values.surname}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.surname}
            touched={touched.surname}
          />
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
            disabled={isSubmiting}
            className={styles.button}
          >
            Зарегистрироваться
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignForm;
