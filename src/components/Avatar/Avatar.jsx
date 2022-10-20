import "./Avatar.scss"

const Avatar = ({src="./assets/img/defaultAvatar.png"}) => {
  return (
    <div className="avatar">
      <img
        className="avatar__img"
        alt="аватар"
        src="./assets/img/defaultAvatar.png"
      />
    </div>
  );
};

export default Avatar
