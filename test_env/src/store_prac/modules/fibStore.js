import { createSlice } from "@reduxjs/toolkit";

const fibSlice = createSlice({
  name: "fibstate",
  initialState: {
    fibCount: 1,
  },
  reducers: {
    inc(state) {
      state.fibCount++;
    },
    des(state) {
      state.fibCount--;
    },
    set(state, action) {
      state.fibCount = action.payload;
    },
  },
});

function setWithDelay(newValue) {
  return async (dispatch) => {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        dispatch(set(newValue));
      }, 5000);
      resolve("ok");
    });
  };
}
const { inc, des, set } = fibSlice.actions;
const reducer = fibSlice.reducer;

export { inc, des, set, setWithDelay };
export default reducer;
