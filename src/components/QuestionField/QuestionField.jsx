import "./QuestionField.scss";

const QuestionField = () => {
    return (
        <div className="question_field">
            <input className="question_field__input" type="text"/>
            <button className="question_field__button">Спросить</button>
        </div>
    )
}

export default QuestionField;