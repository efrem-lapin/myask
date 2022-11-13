import React from "react";
import Avatar from "../components/Avatar/Avatar";
import { useSelector } from "react-redux";

import InputLabel from "../components/InputLabel/InputLabel";

const UserSettings = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="container page mobileNonContainer">
      <div className="userSettingBackground">
        <h2 className="section__title">Настройки</h2>
        <form className="form_setting">
          <div className="avatarField">
            <Avatar src={user.avatar} size={150} />
            <input className="avatarFieldInput" type="file" />
          </div>
          <InputLabel
            labelText="Имя"
            type="text"
            placeholder="Изменить имя"
            setValue={null}
          />
          <InputLabel
            labelText="Логин"
            type="text"
            placeholder="Изменить логин"
            setValue={null}
          />
          <InputLabel
            labelText="Пароль"
            type="password"
            placeholder="Изменить пароль"
            setValue={null}
          />
          <button className="form__button">Изменить</button>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
