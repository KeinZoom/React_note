import { createSlice } from "@reduxjs/toolkit";

const articleStore = createSlice({
  name: "article",
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles(state, action) {
      state.articles = [...action.payload];
    },
  },
});

const { setArticles } = articleStore.actions;
const reducer = articleStore.reducer;

function fetchArticles() {
  return async () => {
    const res = await fetch("");
    const data = await res.json();
    if (data) {
      setArticles(data);
    }
  };
}

export { fetchArticles };
export default reducer;
