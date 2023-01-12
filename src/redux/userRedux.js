import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: '',
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = true;
      state.currentUser = action.payload;
      console.log('current suer', state.currentUser)
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, initialState } = userSlice.actions;
export default userSlice.reducer;