import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { refreshAction } from "./../../actions/user";
import Token from "./../../services/token";

const initialState = {
  isAuth: false,
  data: {
    id: "",
    name: "",
    surname: "",
    avatar: "",
  },
  status: "",
};

export const fetchAuth = createAsyncThunk("auth/thunkAuth", async () => {
  const res =  await refreshAction();
  return res.data;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.data = {};
      state.status = "";
    },
  },
  extraReducers: {
    [fetchAuth.pending]: (state) => {
      state.status = "pending";
    },
    [fetchAuth.fulfilled]: (state, action) => {
      Token.setToken(action.payload.token);
      state.data   = action.payload.user;
      state.isAuth = true;
      state.status = "fulfield";
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "rejected";
      state.status = false;
    },
  },
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
