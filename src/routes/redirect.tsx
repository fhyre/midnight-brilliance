import { useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import { useLocation, useNavigate } from "react-router-dom";

const protectedRoutes = ["/home", "/courses"];
const publicRoutes = ["/login", "/signup", "/"];

export const Redirect = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !protectedRoutes.includes(pathname) &&
      !publicRoutes.includes(pathname)
    ) {
      navigate("/");
      return;
    }
    if (!auth?.authUser && protectedRoutes.includes(pathname)) {
      navigate("/");
      return;
    }
    if (auth?.authUser && publicRoutes.includes(pathname)) {
      navigate("/home");
      return;
    }
  }, [auth]);

  return children;
};
