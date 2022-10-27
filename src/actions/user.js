import axios from "axios";

export const regUser = async (e, username, email, password) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      "http://localhost:3001/api/reg",
      {
        username,
        email,
        password,
      }
    );

    console.log(response.data.message);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (e, email, password) => {
  e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem('token', response.data.accessToken);
    } catch (error) {
      console.error(error);
    }
  };