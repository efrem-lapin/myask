import Avatar from "../Avatar/Avatar";
import "./QuestionBox.scss";

const QuestionBox = ({ userInfo }) => {
    return (
      <div className="question_box">
        <Avatar />
        <div className="question_box__text">
          <h3 className="question_box__name">{userInfo.name}</h3>
          <p className="question_box__question">{userInfo.question}</p>
        </div>
      </div>
    );
}

export default QuestionBox;
