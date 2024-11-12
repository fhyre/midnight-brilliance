import { Outlet } from "react-router-dom";
import brilliantMascot from "../assets/brilliant-mascot.svg";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen min-w-[300px] items-center justify-center gap-32">
      <div className="hidden w-[250px] md:block">
        <img src={brilliantMascot} alt="" />
      </div>
      <Outlet />
    </div>
  );
};
