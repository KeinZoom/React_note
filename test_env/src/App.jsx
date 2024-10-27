import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Article from "./pages/article";
import Layout from "./router";
import Board from "./pages/board";
import About from "./pages/about";
import NotFound from "./pages/notfound";
import ReducerTemp from "./components/useReducerTemp";
import ParComp from "./components/forwardRef";
import ZustandUsage from "./components/ZustandUsage";
import ComTestLocalStroage from "./components/ComTestLocalStroage";
import NumberStorePrac from "./components/NumberStorePrac";
import store from "./store_prac";
import StoreUsage from "./components/storeUsage";
import PracUseReducer from "./components/PracUseReducer";
import PracZusStore from "./components/zustandPrac/PracZusStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/inner",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Board />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <PracZusStore />;
}

export default App;
