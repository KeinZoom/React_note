import { createSlice } from "@reduxjs/toolkit";

const articleStore = createSlice({
  name: "article",
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
  },
});

const { setArticles } = articleStore.actions;
const reducer = articleStore.reducer;

function fetchArticles() {
  return async (dispatch) => {
    const res = await fetch(
      "https://api.freeapi.app/api/v1/public/meals?page=1&limit=10&query=rice"
    );
    const data = await res.json();
    if (data) {
      dispatch(setArticles(data.data));
      console.log(data.data);
    }
  };
}

export { fetchArticles };
export default reducer;
