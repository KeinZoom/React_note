import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setToken(state, action) {
      state = action;
    },
  },
});

const { setToken } = tokenSlice.actions;
const tokenReducer = tokenSlice.reducer;

function getToken(value) {
  return async (dispatch) => {
    const result = await axios.post(value);
    dispatch(setToken(result));
  };
}

export { setToken, getToken };
export default tokenReducer;
