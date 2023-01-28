import React from "react";
import PageBox from "../../components/PageBox/PageBox";
import SettingsForm from "../../components/SettingsForm/SettingsForm";
import { logoutAction } from "../../actions/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Token from "../../services/token";
import { logout } from "../../store/slices/AuthSlice";

import styles from "./UserSettings.module.scss";

const UserSettings = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();
    const res = await logoutAction();
    if (res.status === 200) {
      Token.clearToken();
      dispatch(logout());
      nav("/");
    }
  }
  return (
    <div className="container">
      <PageBox title="Настройки">
        <SettingsForm />
        <a className={styles.logoutButton} href="/sign" onClick={(e) => handleLogout(e)}>Выйти</a>
      </PageBox>
    </div>
  );
};

export default UserSettings;
