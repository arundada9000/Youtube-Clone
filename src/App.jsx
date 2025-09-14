import React from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, ToggleTheme } = useTheme();
  return (
    <div
      className={`flex gap-4 min-h-screen overflow-x-hidden ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <aside>
        <Sidebar />
      </aside>
      <main className="ml-[70px] pl-2 flex-grow w-full">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
