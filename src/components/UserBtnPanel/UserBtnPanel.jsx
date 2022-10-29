import QuestionField from "../QuestionField/QuestionField";
import "./UserBtnPanel.scss";
import { useState } from "react";

const UserBtnPanel = () => {

  const [isShowQF, setIsShowQF] = useState(false)

  return (
    <div className="container">
      <div className="user_btn_panel">
        <button 
          className="user_btn_panel__btn user_btn_panel__btn_long"
          onClick={() => setIsShowQF(prev => !prev)}
          >
          {isShowQF ? "Скрыть" : "Задать вопрос"}
        </button>
        <button className="user_btn_panel__btn hide_mobile">Подписаться</button>
      </div>
      {isShowQF && <QuestionField />}
      <button className="user_btn_panel__btn show_mobile hide_desc">Подписаться</button>
    </div>
  );
};

export default UserBtnPanel;
