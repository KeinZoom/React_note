import { configureStore } from "@reduxjs/toolkit";
import numberStore from "./modules/numberStore";
import articleStore from "./modules/articleStore";
import fibStore from "./modules/fibStore";

export default configureStore({
  reducer: {
    number: numberStore,
    article: articleStore,
    fib: fibStore,
  },
});
