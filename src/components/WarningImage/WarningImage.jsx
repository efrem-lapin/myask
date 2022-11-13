import React from "react";

function WarningImage({ text }) {
  return (
    <div className="section__notfound">
      <img
        className="section__img"
        src="./assets/img/sad.png"
        alt="sad smail"
      />
      <p className="section__descr">{text}</p>
    </div>
  );
}

export default WarningImage;
