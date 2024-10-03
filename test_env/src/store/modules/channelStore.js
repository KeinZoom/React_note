import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = channelStore.actions;
const reducer = channelStore.reducer;

const fetchChannels = () => {
  return async (dispatch) => {
    const data = await axios.get("http://localhost:3000/products");
    if (data.data) {
      console.log(data.data);
      dispatch(setChannels(data.data));
    }
  };
};

export { setChannels };
export { fetchChannels };
export default reducer;
