import { createSlice } from "@reduxjs/toolkit";

const numberStore = createSlice({
  name: "number",
  initialState: { number: 0 },
  reducers: {
    increament(state) {
      state.number++;
    },
    descreament(state) {
      state.number--;
    },
    setvalue(state, action) {
      state.number = action.payload;
    },
  },
});

const { increament, descreament, setvalue } = numberStore.actions;
const reducer = numberStore.reducer;

export { increament, descreament, setvalue };
export default reducer;
