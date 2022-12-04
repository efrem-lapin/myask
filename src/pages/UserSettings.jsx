import React, { useRef, useState } from "react";
import InputLabel from "../components/InputLabel/InputLabel";
import AvatarReplacement from "../components/AvatarReplacement/AvatarReplacement";
import { useSelector } from 'react-redux';
import $api from "../http";

const UserSettings = () => {
  const user = useSelector(state => state.user.data);
  const [newData, setNewData] = useState({
    name: user.name,
    surname: user.surname,
    password: "",
    avatar: ""
  });

  function imageHandler(image) {
    setNewData({ ...newData, avatar: image });
  }

  function inputHandler(e, name, value) {
    e.preventDefault();
    setNewData({ ...newData.current, [name]: value });
  }

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("avatar", newData.avatar)
    $api.post(`${process.env.REACT_APP_HOST}/api/user/change`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  return (
    <div className="container page mobileNonContainer">
      <div className="userSettingBackground">
        <h2 className="section__title">Настройки</h2>
        <form className="form_setting" name="settings" encType="multipart/form-data" onSubmit={submitForm}>
          <AvatarReplacement callback={imageHandler} />
          <InputLabel
            labelText="Имя"
            type="text"
            placeholder="Введите имя"
            setValue={(e) => inputHandler(e, "name", e.target.value)}
          />
          <InputLabel
            labelText="Фамилия"
            type="text"
            placeholder="Введите фамилию"
            setValue={(e) => inputHandler(e, "surname", e.target.value)}
          />
          <InputLabel
            labelText="Старый пароль"
            type="password"
            placeholder="Введите пароль"
            setValue={(e) => inputHandler(e, "password", e.target.value)}
          />
           <InputLabel
            labelText="Новый пароль"
            type="password"
            placeholder="Введите пароль"
            setValue={(e) => inputHandler(e, "password", e.target.value)}
          />
          <button className="form__button">Изменить</button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
