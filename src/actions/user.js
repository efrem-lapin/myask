import $api from "../http/index";
import axios from "axios";

export const regUser = async (userData) => {
  try {
    const response = await $api.post("/api/registration", userData);

    return response;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const loginUser = async (user) => {
  try {
    const response = await $api.post("/api/login", user);
    return response.data;
  } catch (error) {
    return { error: error.response.data.message };
  }
};

export const updateUser = async (newData) => {
  try {
    const data = new FormData();

    data.append("avatar", newData.avatar);
    data.append("name", newData.name);
    data.append("surname", newData.surname);
    data.append("password", newData.password);
    data.append("newPassword", newData.newPassword);

    return await $api.put(
      `${process.env.REACT_APP_HOST}/api/user/update`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const updateStatus = async (data) => {
  try {
    const res = await $api.put(
      `${process.env.REACT_APP_HOST}/api/user/status`,
      data
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const refreshAction = async () => {
  return await axios.get(
    `${process.env.REACT_APP_HOST}/api/refresh`,
    { withCredentials: true }
  );

};

export const getUserById = async (id) => {
  return await $api.get(`${process.env.REACT_APP_HOST}/api/user/${id}`);
}

export const logoutAction = async () => {
  return await $api.get(`${process.env.REACT_APP_HOST}/api/logout`);
};
