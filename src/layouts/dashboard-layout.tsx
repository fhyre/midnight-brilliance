import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const DashboardLayout = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
