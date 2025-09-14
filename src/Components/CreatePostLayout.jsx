import React from "react";
import { Outlet } from "react-router";
import CreatePost from "./CreatePost";
import Sidebar from "./Sidebar";
import Header from "./Header";

const CreatePostLayout = () => {
  return (
    <div className="flex gap-4 bg-black min-h-screen text-white overflow-x-hidden">
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
