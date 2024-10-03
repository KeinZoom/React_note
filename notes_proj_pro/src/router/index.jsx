import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import Year from "@/pages/Year";
import New from "@/pages/New";
import { Provider } from "react-redux";
import store from "@/store";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Layout />
      </Provider>
    ),
    children: [
      {
        path: "month",
        element: <Month />,
      },
      {
        path: "year",
        element: <Year />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
  },
]);

export default router;