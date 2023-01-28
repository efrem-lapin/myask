export const validateSettings = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "";
  } else if (values.name.length < 2) {
    errors.name = "Имя должно быть больше 2-х символов";
  }

  if (!values.surname) {
    errors.surname = "";
  } else if (values.surname.length < 2) {
    errors.surname = "Фамилия должна быть больше 2-х символов";
  }
  return errors;
};

export const validateLogin = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Это поле обязательно для заполнения";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Неверный email!!!";
  }

  if (!values.password) {
    errors.password = "Это поле обязательно для заполнения";
  } else if (values.password.length < 6) {
    errors.password = "Пароль должен быть больше 6 символов";
  }
  return errors;
};

export const validateSign = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Это поле обязательно для заполнения";
  } else if (values.name.length < 2) {
    errors.name = "Имя должно быть длиннее 1 символа";
  }

  if (!values.surname) {
    errors.surname = "Это поле обязательно для заполнения";
  } else if (values.surname.length < 2) {
    errors.surname = "Фамилия должна быть длиннее 2 символов";
  }

  if (!values.email) {
    errors.email = "Это поле обязательно для заполнения";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Некорректный email!";
  }

  if (!values.password) {
    errors.password = "Это поле обязательно для заполнения";
  } else if (values.password.length < 6) {
    errors.password = "Пароль должен быть больше 6 символов";
  }

  return errors;
};
