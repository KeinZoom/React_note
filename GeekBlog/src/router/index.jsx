import { createBrowserRouter } from "react-router-dom";
import GeekLayout from "@/pages/Layout";
import Login from "@/pages/Login";
import RouteAuthorize from "@/components/RouteAuthrize";
import BarChart from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <RouteAuthorize>
      <GeekLayout />
      // </RouteAuthorize>
    ),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/chart",
    element: <BarChart />,
  },
  // {
  //   path: "/*",
  //   element: <div>not found</div>,
  // },
]);

export default router;
