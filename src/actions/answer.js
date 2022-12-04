import $api from "../http";

export const likeAnswer = async (answerId, likerId, answererId) => {
  return await $api.post(`${process.env.REACT_APP_HOST}/api/putlike`, {
    questionId: answerId,
    likerId,
    answererId,
  });
};

export const removeAnswerAction = async (answerId) => {
  return await $api.post(`${process.env.REACT_APP_HOST}/api/remove`, {
    id: answerId,
  });
};

export const getLastAnswers = async () => {
  return await $api.get(`${process.env.REACT_APP_HOST}/api/last`);
};

export const postAnswer = async (answer, idQuestion) => {
  return await $api.post(`${process.env.REACT_APP_HOST}/api/answer`, {
    answer,
    id: idQuestion,
  });
};
