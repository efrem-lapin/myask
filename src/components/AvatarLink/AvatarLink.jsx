import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

import styles from "./AvatarLink.module.scss";

const AvatarLink = ({ info }) => {
  return (
    <div className={styles.avatarLink}>
      <Link to={`/id${info.id}`}>
        <Avatar src={info.avatar} />
      </Link>
    </div>
  );
};

export default AvatarLink;
