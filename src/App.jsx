import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import MobileView from "./Components/MobileView";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showDialogBox, setShowDialogBox] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 550);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      console.log(isMobile);
      setShowDialogBox(true);
    }
  }, [isMobile]);

  const { theme, ToggleTheme } = useTheme();
  return (
    <div
      className={`flex gap-4 min-h-screen overflow-x-hidden ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {showDialogBox && <MobileView setShowDialogBox={setShowDialogBox} />}
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
