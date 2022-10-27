import "./UserBtnPanel.scss";
import QuestionField from "../QuestionField/QuestionField";
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
        <button className="user_btn_panel__btn">Подписаться</button>
      </div>
      {isShowQF && <QuestionField />}
    </div>
  );
};

export default UserBtnPanel;
