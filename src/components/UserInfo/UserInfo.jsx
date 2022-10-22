import Avatar from "../Avatar/Avatar";
import "./UserInfo.scss";

const UserInfo = ({ user }) => {
  const defaultUser = {name: "Имя Пользователя", status: "Тут позьзователь будет устанавливать статус"}
  return (
    <div className="container">
      <div className="user_info">
        <div className="user_info__side">
          <Avatar/>
          <div className="user_info__text">
            <div className="user_info__name">{user?.username || defaultUser.name}</div>
            <div className="user_info__status">{user?.status || defaultUser.status}</div>
          </div>
        </div>
        <div className="user_info__side">
          <div className="user_info__counter">
            <div className="user_info__num">320</div>
            <div className="user_info__string">ответов</div>
          </div>
          <div className="user_info__counter">
            <div className="user_info__num">2K</div>
            <div className="user_info__string">подписчиков</div>
          </div>
          <div className="user_info__counter">
            <div className="user_info__num">1M</div>
            <div className="user_info__string">лайков</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
