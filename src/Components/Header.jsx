import { IoLogoYoutube } from "react-icons/io";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Notifications from "./Notifications";
import AudioSearch from "./AudioSearch";
import Create from "./Create";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const handleNotificationClick = () => {
    setNotificationOpen(!notificationOpen);
  };

  const [listening, setListening] = useState(false);
  const handleMicrophoneClick = () => {
    setListening(!listening);
  };

  const [createOpen, setCreateOpen] = useState(false);
  const handleCreateClick = () => {
    setCreateOpen(!createOpen);
  };

  const [profileOpen, setProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className="fixed right-0 left-[70px] bg-[rgb(0,0,0,0.75)] top-0 flex justify-between items-center p-2 border-b-0 border-white z-20">
      <div className="flex items-center gap-2 text-xl font-bold p-2 font-arial">
        <IoLogoYoutube
          style={{ fontSize: "30px", color: "red", cursor: "pointer" }}
        />
        YouTube
      </div>
      <div className="flex items-center gap-2 border-0 rounded-[35px] overflow-hidden shadow-sm focus:shadow-md  shadow-[rgb(255,255,255,0.5)]">
        <input
          type="text"
          placeholder=""
          className=" p-2 text-white w-136 h-full border-0 focus:outline-none"
        />
        <CiSearch
          className="bg-[rgb(255,255,255,0.15)] p-1 rounded cursor-pointer h-full"
          style={{
            fontSize: "30px",
            color: "white",
            cursor: "pointer",
            width: "40px",
            outline: "none",
            border: "none",
          }}
        />
      </div>
      {/* microphone */}
      <button className="relative p-3 bg-[rgb(255,255,255,0.15)] rounded-full ml-3 hover:bg-gray-200/40">
        <FaMicrophone
          onClick={handleMicrophoneClick}
          style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
        />
        <AudioSearch
          listening={listening}
          handleMicrophoneClick={handleMicrophoneClick}
        />
      </button>

      <button className=" ml-3 flex items-center gap-1 pt-0.5 pb-2 px-4 cursor-pointer  bg-[rgb(255,255,255,0.15)] rounded-4xl hover:bg-gray-200/40">
        <span
          onClick={handleCreateClick}
          className=" flex gap-1 items-center justify-center border-none bg-transparent cursor-pointer"
        >
          <span className=" text-3xl"> +</span>{" "}
          <span className="pt-1">Create</span>
        </span>

        <div className="relative hover:bg-gray-200/40">
          <Create createOpen={createOpen} />
        </div>
      </button>
      <button className="relative ml-3 flex items-center gap-1 p-2 cursor-pointer rounded-4xl hover:bg-gray-200/40">
        <IoIosNotificationsOutline
          onClick={handleNotificationClick}
          style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
        />
        <div className="z-10 absolute top-[0px] right-[40px] bg-[rgb(255,255,255,0.11)]">
          <Notifications notificationOpen={notificationOpen} />
        </div>
      </button>
      <div className=" ml-3 flex items-center justify-center p-2 cursor-pointer rounded-full hover:bg-gray-200/40">
        <FaUserCircle
          onClick={handleProfileClick}
          style={{ fontSize: "25px", color: "white", cursor: "pointer" }}
        />

        <span className="relative ">
          <ProfileMenu profileOpen={profileOpen} />
        </span>
      </div>
    </div>
  );
};

export default Header;
