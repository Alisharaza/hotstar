// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../Components/Services/GlobalApi";
import { useGetRequest } from "../../Hooks/useGetRequest";
import { useNavigate } from "react-router-dom";
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userData) => {
    try {
      const response = await api.post("/user/signUp", { ...userData });
      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }
);
export const logInUser = createAsyncThunk(
  "user/logInUser",
  async (userData) => {
    try {
      const response = await api.post("/user/login", { ...userData });

      return response.data;
    } catch (error) {
      return Promise.reject(error.response.data);
    }
  }
);

const initialState = {
  msg: "",
  user: null,
  token: "",
  isAuthenticated: false,
  loading: false,
  error: null,
};
// Slice for auth

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isUserLoggedIn(state) {
      const token = localStorage.getItem("hotstar_token");
      if (token) {
        const user = localStorage.getItem("hotstar_user");
        state.isAuthenticated = true;
        state.token = token;
        state.user = user;
      }
    },
    logoutUser(state) {
      localStorage.removeItem("hotstar_token");
      localStorage.removeItem("hotstar_user");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        const { token, data } = payload;
        state.user = data.user;
        localStorage.setItem("hotstar_token", token);
        localStorage.setItem("hotstar_user", JSON.stringify(data.user));
        state.loading = false;
        state.error = null;
      })
      .addCase(signUpUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.isAuthenticated = false;
      })
      .addCase(logInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        const { token, data } = payload;
        state.user = data.user;
        localStorage.setItem("hotstar_token", token);
        localStorage.setItem("hotstar_user", JSON.stringify(data.user));
        state.loading = false;
        state.error = null;
      })
      .addCase(logInUser.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
        state.isAuthenticated = false;
      });
  },
});
export const { isUserLoggedIn, logoutUser, extraReducers } = userSlice.actions;

export default userSlice.reducer;
