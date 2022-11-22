import React from "react";
import ListAnswers from "../ListAnswers/ListAnswers";
import WarningImage from "../WarningImage/WarningImage";

function UserContent({ listAnswers, title, warningText, isSelf }) {
  return (
    <div className="container mobileNonContainer">
      <div className="pageContentBackround">
        {listAnswers.length ? (
          <>
            <h2 className="section__title">{title}</h2>
            <ListAnswers list={listAnswers} isSelf={isSelf}/>
          </>
        ) : (
          <WarningImage text={warningText} />
        )}
      </div>
    </div>
  );
}

export default UserContent;
