import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

function RouteAuthorize({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"} replace />;
}

export default RouteAuthorize;
