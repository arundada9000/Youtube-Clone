import React from "react";
import { Outlet } from "react-router";
import CreatePost from "./CreatePost";
import Sidebar from "./Sidebar";
import Header from "./Header";
import useTheme from "../hooks/useTheme";

const CreatePostLayout = () => {
  const { theme, ToggleTheme } = useTheme();

  return (
    <div
      className={`flex gap-4 min-h-screen text-white overflow-x-hidden
    ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
    `}
    >
      <aside>
        <Sidebar />
      </aside>
      <main className="ml-[70px] pl-2 flex-grow w-full">
        <Header></Header>
        <CreatePost />
        <Outlet />
      </main>
    </div>
  );
};
export default CreatePostLayout;
