import { configureStore } from "@reduxjs/toolkit";
import numberStore from "./modules/numberStore";
import articleStore from "./modules/articleStore";

const store = configureStore({
  reducer: {
    number: numberStore,
    article: articleStore,
  },
});

export default store;
