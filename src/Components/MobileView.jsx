import React from "react";
import useTheme from "../hooks/useTheme";

function MobileView({ setShowDialogBox }) {
  const { theme, ToggleTheme } = useTheme();
  return (
    <div
      className={`fixed left-0 top-0 right-0 bottom-0 p-6 z-101 flex flex-col gap-4 items-center justify-center min-h-screen min-w-full
        ${theme === "dark" ? "bg-black text-white" : "text-black bg-white"}
        `}
    >
      <h1 className="text-md max-w-[450px]">
        ArunTube is not made for mobile devices so it might not be responsive,
        do you still wish to proceed ?{" "}
      </h1>
      <a
        onClick={() => setShowDialogBox(false)}
        className="bg-red-400 text-md text-white px-3 py-2 cursor-pointer rounded-3xl"
      >
        Yes Show me as it is.{" "}
      </a>
      <a
        href="https://google.com"
        className="bg-blue-400 text-md text-white px-3 py-2 cursor-pointer rounded-3xl"
      >
        No Take me out please
      </a>
    </div>
  );
}

export default MobileView;
