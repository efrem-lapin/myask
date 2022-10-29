import "./Avatar.scss";

const Avatar = ({ src = "./assets/img/default_avatar.jpg" }) => {
  return (
    <div className="avatar">
      <img className="avatar__img" alt="аватар" src={src} />
    </div>
  );
};

export default Avatar;
