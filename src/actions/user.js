import axios from "axios";

export const regUser = async (e, username, email, password) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_HOST}/api/reg`,
      {
        username,
        email,
        password,
      }
    );

    alert(response.data.message);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (e, email, password) => {
  e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/api/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem('token', response.data.accessToken);
      return response.data.id;
    } catch (error) {
      console.error(error);
    }
  };