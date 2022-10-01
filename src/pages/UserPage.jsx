import React from "react";
import ListQuestions from "../components/ListQuestions/ListQuestions";
import UserBtnPanel from "../components/UserBtnPanel/UserBtnPanel";
import UserInfo from "../components/UserInfo/UserInfo";

const UserPage = () => {
  return (
    <>
      <UserInfo />
      <UserBtnPanel />
      <ListQuestions />
    </>
  );
};

export default UserPage;
