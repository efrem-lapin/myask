import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  email: null,
  username: null,
  status: null,
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
    },

    removeUser: (state) => {
      state.id = null;
      state.email = null;
      state.username = null;
      state.status = null;
    },
  },
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
