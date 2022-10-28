import React from "react";

import InputLabel from "../components/InputLabel/InputLabel";

const UserSettings = () => {
  return (
    <div className="container">
      <form className="form_setting">
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
      </form>
    </div>
  );
}

export default UserSettings;
