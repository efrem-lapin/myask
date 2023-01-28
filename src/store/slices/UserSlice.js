import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserById } from './../../actions/user';

const initialState = {
  data: {
    id: null,
    name: null,
    surname: null,
    status: null,
    avatar: null,
    likes: null,
    subscriptions: []
  },
  status: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (id) => {
  return await getUserById(id);
});

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrLike: (state) => {
      state.data.likes = state.data.likes + 1;
    },
    decrLike: (state) => {
      state.data.likes = state.data.likes - 1;
    },
    addSubs: (state, action) => {
      state.data.subscriptions.push({subscriber: action.payload})
    },
    removeSubs: (state, action) => {
      state.data.subscriptions = state.data.subscriptions.filter(subs => subs.subscriber !== action.payload);
    }
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "pending";
    },

    [fetchUser.fulfilled]: (state, action) => {
      state.data   =  action.payload.data;
      state.status = "fulfield";
    },
    [fetchUser.rejected]: (state) => {
      state.status = "rejected";
    }
  }
});

export const { decrLike, incrLike, addSubs, removeSubs } = UserSlice.actions;

export default UserSlice.reducer;
