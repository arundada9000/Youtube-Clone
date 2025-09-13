import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex gap-4 bg-black min-h-screen text-white overflow-x-hidden">
      <aside>
        <Sidebar />
      </aside>
      <main className="ml-[70px] pl-2 flex-grow w-full">
        <Header></Header>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
