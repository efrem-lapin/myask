import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import UserBtnPanel from "../UserBtnPanel/UserBtnPanel";

function UserHeader({ user, id, btns, amountAnswers}) {
  return (
    <div className="container mobileNonContainer">
      <div className="userInfoBackground">
        <UserInfo user={user} amountAnswers={amountAnswers} />
        {btns && <UserBtnPanel id={id} />}
      </div>
    </div>
  );
}

export default UserHeader;
