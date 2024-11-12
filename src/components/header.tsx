import { Link, useLocation } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import { auth } from "../firebase-config";
import BrilliantLogo from "../assets/brilliant-logo.svg?react";
import CoursesIcon from "../assets/icons/courses.svg?react";
import HomeIcon from "../assets/icons/home.svg?react";
import LightningOutlineIcon from "../assets/icons/lightning-outline.svg?react";

export const Header = () => {
  const { pathname } = useLocation();

  const handleSignOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="sticky top-0 z-[1] h-[60px] min-w-[300px] bg-white shadow-md">
      <header className="mx-auto flex h-full w-full max-w-[1200px] items-center px-2">
        <div className="flex h-full items-center gap-10">
          <BrilliantLogo className="hidden w-24 md:block md:w-32" />
          <div className="flex h-full gap-6">
            <Link
              to="/home"
              className={`flex items-center gap-2 border-b-2 border-b-transparent transition-all duration-200 hover:border-b-black hover:text-black ${pathname === "/home" ? "border-b-black text-black" : "text-gray-400"}`}
            >
              <HomeIcon className="hidden w-4 md:block" />
              <span>Home</span>
            </Link>
            <Link
              to="/courses"
              className={`flex items-center gap-2 border-b-2 border-b-transparent transition-all duration-200 hover:border-b-black hover:text-black ${pathname === "/courses" ? "border-b-black text-black" : "text-gray-400"}`}
            >
              <CoursesIcon className="hidden w-4 md:block" />
              <span>Courses</span>
            </Link>
          </div>
        </div>
        <div className="flex flex-grow items-center justify-end gap-5">
          <div className="hidden w-full max-w-[400px] items-center rounded-lg bg-gray-100 p-2 transition-all duration-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-black md:flex">
            <Search width={15} className="mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-inherit focus:outline-none"
            ></input>
          </div>
          <button className="text-nowrap rounded-full border-2 border-green-500 px-4 py-1 text-sm text-green-500 md:text-base">
            Gift Premium
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-black">1</span>
            <LightningOutlineIcon className="w-4" />
          </div>
          <button onClick={handleSignOut}>
            <Menu />
          </button>
        </div>
      </header>
    </div>
  );
};
