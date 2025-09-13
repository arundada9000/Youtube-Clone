import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [newWidth, setNewWidth] = useState("60px");

  const toggleOpen = () => {
    console.log(open);
    setOpen((prev) => {
      const newState = !prev;
      setNewWidth(newState ? "125px" : "60px");
      return newState;
    });
  };

  return (
    <div
      className={`fixed overflow-hidden border-white border-r-0 p-2 transition-all duration-300
        bg-[rgb(0,0,0,0.95)] z-100 min-h-screen
        `}
      style={{ width: newWidth }}
    >
      <ul className="flex flex-col items-start gap-6">
        <li className="hover:opacity-50 p-2 rounded cursor-pointer">
          <button type="button " onClick={toggleOpen}>
            <RxHamburgerMenu
              style={{
                fontSize: "22px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </button>
        </li>
        <li className="flex items-center justify-center w-full hover:scale-125 p-1 rounded cursor-pointer">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer ${
                isActive ? "text-red-300" : "text-white"
              }`
            }
          >
            <IoHomeOutline
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
            {open ? "Home" : ""}
          </NavLink>
        </li>
        <li className="flex items-center justify-center w-full hover:scale-125 p-1 rounded cursor-pointer">
          <NavLink
            to="/shorts"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer ${
                isActive ? "text-red-300" : "text-white"
              }`
            }
          >
            <SiYoutubeshorts
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
            {open ? "Shorts" : ""}
          </NavLink>
        </li>
        <li className="flex items-center justify-center w-full hover:scale-125 p-1 rounded cursor-pointer">
          <NavLink
            to="/subscriptions"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer ${
                isActive ? "text-red-300" : "text-white"
              }`
            }
          >
            <MdOutlineSubscriptions
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
            {open ? "Subscriptions" : ""}
          </NavLink>
        </li>
        <li className="flex items-center justify-center w-full hover:scale-125 p-1 rounded cursor-pointer">
          <NavLink
            to="/you"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer ${
                isActive ? "text-red-300" : "text-white"
              }`
            }
          >
            <FaUserCircle
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
            {open ? "You" : ""}
          </NavLink>
        </li>
        <li className="w-full flex items-center justify-center hover:scale-125 p-1 rounded cursor-pointer">
          <NavLink
            to="/downloads"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center cursor-pointer ${
                isActive ? "text-red-300" : "text-white"
              }`
            }
          >
            <LiaDownloadSolid
              style={{
                fontSize: "22px",
                color: "white",
              }}
            />
            {open ? "Downloads" : ""}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
