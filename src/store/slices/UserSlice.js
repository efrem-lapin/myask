import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Token from './../../services/token';

const initialState = {
  data: {
    id: null,
    email: null,
    name: null,
    surname: null,
    status: null,
    avatar: null,
    likes: null,
    subscriptions: []
  },
  status: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_HOST}/api/refresh`,
    { withCredentials: true }
  );

  return response.data;
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.user;
    },

    removeUser: (state) => {
      state.data = {};
    },
  },

  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "pending";
    },
    [fetchUser.fulfilled]: (state, action) => {
      Token.setToken(action.payload.token)
      state.data = action.payload.user;
    },
    [fetchUser.rejected]: (state, action) => {
      //
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
