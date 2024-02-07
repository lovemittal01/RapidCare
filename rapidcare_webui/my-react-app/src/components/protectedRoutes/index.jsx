import { Navigate, Outlet } from "react-router-dom";
function isLoggedIn() {
  const token = localStorage.getItem("token");
  if (!token) return false;
  else return true;
}

export default function ProtectedRoutes() {
  const auth = isLoggedIn();
  return auth ? <Outlet /> : <Navigate to="/" />;
}
