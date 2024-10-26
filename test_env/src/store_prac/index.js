import { configureStore } from "@reduxjs/toolkit";
import numberStore from "./modules/numberStore";

const store = configureStore({
  reducer: {
    number: numberStore,
  },
});

export default store;
