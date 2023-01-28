import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { useSelector } from "react-redux";

import styles from "./AvatarReplacement.module.scss";

const AvatarReplacement = ({ callback }) => {
  const avatar = useSelector((state) => state.auth.data.avatar);
  const [image, setImage] = useState({});
  const [imgURL, setImgURL] = useState();
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    setImgURL(fileReader.result);
  };

  function fileHandler(e) {
    const file = e.target.files[0];
    fileReader.readAsDataURL(file);
    setImage(file);
    callback(file);
  }

  return (
    <div className={styles.avatarReplacement}>
      <div className={styles.avatarWrapper}>
        <Avatar src={imgURL || avatar} />
      </div>
      <span className={styles.fileName}>
        {image.name ? `Файл: ${image.name}` : "Файл не выбран"}
      </span>
      <label className={styles.label} htmlFor="avatar">
        <input
          className={styles.input}
          accept="image/*,.png,.jpg,.web,.gif"
          type="file"
          id="avatar"
          onChange={fileHandler}
        />
        <span className={styles.span}>Загрузить аватар</span>
      </label>
    </div>
  );
};

export default AvatarReplacement;
