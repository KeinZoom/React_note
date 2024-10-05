import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { removeToken, request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";
import { loginApi } from "@/apis/user";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.token = "";
      state.userInfo = {};
      removeToken();
    },
  },
});

const { setToken, setUserInfo, clearUserInfo } = tokenSlice.actions;
const tokenReducer = tokenSlice.reducer;

function fetchLogin(loginForm) {
  return async (dispatch) => {
    const result = await loginApi(loginForm);
    dispatch(setToken(result.data.token));
  };
}

function fetchUserInfo() {
  return async (dispatch) => {
    const result = await request.get("/user");
    dispatch(setUserInfo(result.data.info));
  };
}

export { setToken, clearUserInfo, fetchLogin, fetchUserInfo };
export default tokenReducer;
