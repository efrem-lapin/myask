import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  id: null,
  email: null,
  username: null,
  status: null,
  avatar: null,
};

const fetchUser = createAsyncThunk("user/fetchUser", async function () {
  const response = await axios.get(`${process.env.REACT_APP_HOST}/refresh}`, {
    withCredentials: true,
  });
  const data = await response.json();

  return data;
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.status = action.payload.status;
      state.avatar = action.payload.avatar;
    },

    removeUser: (state) => {
      state.id = null;
      state.email = null;
      state.username = null;
      state.status = null;
      state.avatar = null;
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      //
    },
    [fetchUser.fulfilled]: (state, action) => {
      try {
        window.localStorage.setItem("token", action.payload.token);
        setUser(action.payload.user);
      } catch (error) {
        console.log(error);
      }
    },
    [fetchUser.rejected]: (state, action) => {
      //
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
