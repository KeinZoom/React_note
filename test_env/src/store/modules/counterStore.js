import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
    descrement(state) {
      state.count--;
    },
  },
});

// 导出actionCreator方法
const { increment, descrement } = counterStore.actions;
const reducer = counterStore.reducer;

export { increment, descrement };
export default reducer;
