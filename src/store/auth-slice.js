import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");

const initialAuthState = {
  loginToken: initialToken,
  data: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logOut: (state) => {
      state.loginToken = null;
      localStorage.removeItem("token");
    },
    logIn: (state, action) => {
      state.loginToken = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    loadData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
