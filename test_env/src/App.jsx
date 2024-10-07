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
// import store from "./store";
// import StoreUsage from "./components/storeUsage";

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
  return <ZustandUsage />;
}

export default App;
