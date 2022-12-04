import React from "react";
import UserInfo from "../UserInfo/UserInfo";
import UserBtnPanel from "../UserBtnPanel/UserBtnPanel";

function UserHeader({ user, id, btns, amountAnswers, subs, amountSubs, amountLikes}) {
  return (
    <div className="container mobileNonContainer">
      <div className="userInfoBackground">
        <UserInfo user={user} amountAnswers={amountAnswers} amountSubs={amountSubs} amountLikes={amountLikes}/>
        {btns && <UserBtnPanel id={id} subs={subs}/>}
      </div>
    </div>
  );
}

export default UserHeader;
