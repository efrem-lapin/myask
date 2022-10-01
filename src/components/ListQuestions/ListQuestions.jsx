import QuestionBox from "../QuestionBox/QuestionBox";

const ListQuestions = () => {
    return (
        <div className="list_questions">
            <div className="container">
                <div className="list_questions__inner">
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                    <QuestionBox />
                </div>
            </div>
        </div>
    )
}

export default ListQuestions;