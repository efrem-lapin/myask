import axios from "axios";

export const registration = async (username, email, password) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/registration",
      {
        username,
        email,
        password,
      }
    );

    alert(response.data.message)
  } catch (error) {
    console.error(error);
  }
};

export const authorization = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/authorization",
        {
          email,
          password,
        }
      );
  
      alert(response.data.message)
    } catch (error) {
      console.error(error);
    }
  };