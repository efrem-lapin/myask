import $api from "../http/index";

export const regUser = async (userData) => {
  try {
    const response = await $api.post("/api/registration", userData);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (user) => {
  try {
    const response = await $api.post("/api/login", user);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
