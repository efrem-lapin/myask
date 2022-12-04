import $api from "../http";

export const postQuestion = async (questionerId, question, answerer) => {
  return await $api.post(`${process.env.REACT_APP_HOST}/api/ask`, {
    questioner: questionerId,
    question,
    answerer,
  });
};
