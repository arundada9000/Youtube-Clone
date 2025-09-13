import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import GridVideos from "./GridVideos";

function YouPage() {
  return (
    <div className={`mt-[50px] py-1 w-full flex flex-col`}>
      <div className="flex flex-grow w-full p-3 gap-5">
        <div>
          <FaUserCircle style={{ fontSize: "130px" }} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Arun Neupane</h1>
          <p className="text-sm ">
            <span className="font-bold">@arunneupane4066</span>{" "}
            <span className="text-gray-400">• View channel</span>
          </p>
          <div className="flex gap-2">
            <button className="flex gap-1 bg-gray-400/30 text-sm text-white rounded-3xl items-center p-1.5 px-3 cursor-pointer hover:bg-gray-200/40">
              <MdOutlineSwitchAccount />
              <p>Switch Account</p>
            </button>
            <button className="flex gap-1 bg-gray-400/30 text-sm text-white rounded-3xl items-center p-1.5 px-3 cursor-pointer hover:bg-gray-200/40">
              <FaGoogle />
              <p>Google Account</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-grow w-full items-center justify-between pr-2">
          <h1 className="text-2xl font-bold">History</h1>
          <div className="flex gap-4">
            <button className="p-1 border-1 border-white/50 rounded-lg text-sm cursor-pointer hover:bg-gray-100/40 transition-all duration-100 ease">
              View all
            </button>
            <button className="p-1 border-1 border-white/50 rounded-full text-lg cursor-pointer hover:bg-gray-100/40 transition-all duration-100 ease">
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button className="p-1 border-1 border-white/50 rounded-full text-lg cursor-pointer hover:bg-gray-100/40 transition-all duration-100 ease">
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
        <GridVideos />
      </div>
    </div>
  );
}

export default YouPage;
