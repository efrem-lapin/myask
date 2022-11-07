import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  username: null,
  status: null,
  avatar: null,
};

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
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
