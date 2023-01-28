import { useState } from "react";
import { Formik } from "formik";
import { validateSettings } from "../../services/validate";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../actions/user";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/slices/UserSlice";
import InputLabel from "../../components/InputLabel/InputLabel";
import AvatarReplacement from "../../components/AvatarReplacement/AvatarReplacement";

import styles from "./SettingsForm.module.scss";

const SettingsForm = () => {
  const data = useSelector((state) => state.auth.data);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [avatar, setAvatar] = useState("");

  function imageHandler(image) {
    setAvatar(image);
  }

  async function putUser(data) {
    const res = await updateUser(data);

    if (res.status === 200) {
      dispatch(fetchUser());
      nav("/my");
    }
  }

  return (
    <Formik
      className={styles.form}
      initialValues={{ name: data.name, surname: data.surname }}
      validate={validateSettings}
      onSubmit={(values) => putUser({ avatar, ...values })}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        handleSubmit,
      }) => (
        <form
          className={styles.form}
          name="settings"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <AvatarReplacement callback={imageHandler} />
          <InputLabel
            labelText="Имя"
            placeholder="Введите имя"
            type="text"
            name="name"
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.name}
            value={values.name}
            touched={touched.name}
          />
          <InputLabel
            labelText="Фамилия"
            placeholder="Введите фамилию"
            type="text"
            name="surname"
            handleBlur={handleBlur}
            handleChange={handleChange}
            error={errors.surname}
            value={values.surname}
            touched={touched.surname}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={isSubmitting}
          >
            Сохранить
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SettingsForm;
