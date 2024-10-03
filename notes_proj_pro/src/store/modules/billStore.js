import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const store = createSlice({
  name: "bill",
  initialState: {
    billList: [],
  },
  reducers: {
    setBillList(state, action) {
      state.billList = action.payload;
    },
  },
});

const { setBillList } = store.actions;

const reducer = store.reducer;

const getBillList = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:8888/data");
    console.log(data.data);
    dispatch(setBillList(data.data));
  };
};

export { getBillList };
export default reducer;
