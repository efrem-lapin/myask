import QuestionField from "../QuestionField/QuestionField";
import "./UserBtnPanel.scss";

const UserBtnPanel = () => {
  return (
    <div className="container">
      <div className="user_btn_panel">
        <button className="user_btn_panel__btn user_btn_panel__btn_long">
          Задать вопрос
        </button>
        <button className="user_btn_panel__btn">Подписаться</button>
      </div>
      <QuestionField />
    </div>
  );
};

export default UserBtnPanel;
