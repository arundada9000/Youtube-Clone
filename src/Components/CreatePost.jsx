import React, { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { BiPoll } from "react-icons/bi";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuListVideo } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

const CreatePost = () => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const [search, setSearch] = useState(false);
  const openSearch = () => {
    setSearch(!search);
    if (search) {
      handleFocus();
    }
  };
  return (
    <div className={`flex flex-col mt-[50px] py-1 w-full pb-20`}>
      <div className="flex flex-grow w-full p-3 gap-5">
        <div>
          <FaUserCircle style={{ fontSize: "130px" }} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">Arun Neupane</h1>
          <p className="text-sm ">
            <span className="font-bold">@arunneupane4066</span>{" "}
            <span className="text-gray-400">• 1M Subscribers</span>
          </p>
          <p className="text-sm text-gray-400">
            Hello I am Arun Neupane from Nepal ....more
          </p>
          <div className="flex gap-2">
            <button className="flex gap-1 bg-[rgba(40,40,40,255)] text-sm text-white rounded-3xl items-center p-2 px-3 cursor-pointer hover:bg-gray-200/40 font-semibold">
              Customize Channel
            </button>
            <button className="flex gap-1 bg-[rgba(40,40,40,255)] text-sm text-white rounded-3xl items-center p-2 px-3 cursor-pointer hover:bg-gray-200/40 font-semibold">
              Manage Videos
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center border-b-1 border-white">
        <ul className="flex items-center gap-5 text-gray-300 font-semibold text-lg">
          <li className="cursor-pointer hover:border-b-5 border-white/60 h-10 ">
            Home
          </li>
          <li className="cursor-pointer hover:border-b-5 border-white/60 h-10 ">
            Playlists
          </li>
          <li className="cursor-pointer hover:border-b-5 border-white/60 h-10 ">
            Posts
          </li>
          <li
            className="h-10 flex items-center justify-center pb-2"
            onClick={openSearch}
          >
            <CiSearch style={{ cursor: "pointer", fontSize: "28px" }} />
          </li>
          <li className={`${search ? "block focus" : "hidden"} h-10`}>
            <input
              type="text"
              ref={inputRef}
              className={`${
                search ? "block" : "hidden"
              } border-1 border-white outline-none focus:outline-0`}
            />
          </li>
        </ul>
      </div>
      <div
        className={`flex flex-col gap-3 mt-3 rounded-xl p-2 border-1 border-white max-w-[900px] ${
          search || focused ? "bg-[rgba(40,40,40,255)]" : ""
        }`}
      >
        <div className="flex  justify-between ">
          <div className="flex gap-3 p-3 items-center">
            <FaUserCircle style={{ fontSize: "30px" }} />
            <p className="text-sm font-semibold text-white">Arun Neupane</p>
          </div>
          <div className="flex gap-3 p-3 text-sm text-gray-300">
            <span>Visibility : </span>
            <span>Public</span>
          </div>
        </div>
        <div className="w-full h-10">
          <input
            type="text"
            placeholder="What's on your mind ?"
            onClick={() => setFocused(true)}
            className="w-full outline-0 focus:outline-0 p-2"
          />
        </div>
        <div className="flex justify-between items-center p-2">
          <div className="flex gap-3">
            <button className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              <CiImageOn />
              <span>Image</span>
            </button>
            <button className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              <BiPoll />
              <span>Image Poll</span>{" "}
            </button>
            <button className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              <BiPoll />
              <span>Text Poll</span>
            </button>
            <button className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              <IoMdCheckboxOutline />
              <span>Quiz</span>{" "}
            </button>
            <button className="flex items-center gap-2 font-semibold cursor-pointer hover:bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              <LuListVideo />
              <span>Video</span>
            </button>
          </div>
          <div className="flex gap-5">
            <button className="flex items-center cursor-pointer font-semibold hover:bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              Cancel
            </button>
            <button className="flex  items-center cursor-pointer font-semibold bg-[rgba(77,77,77,255)] px-3 py-2 rounded-4xl">
              <span className="border-r-1 border-white cursor-pointer px-3">
                Post
              </span>
              <IoIosArrowDown style={{ width: "40px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center border-b-1 border-white mt-5 ">
        <ul className="flex items-center gap-10 text-gray-300 font-semibold text-sm pl-10 pb-1">
          <li className="cursor-pointer hover:border-b-5 border-white/60 h-7 ">
            PUBLISHED
          </li>
          <li className="cursor-pointer hover:border-b-5 border-white/60 h-7 ">
            SCHEDULED
          </li>
          <li className="cursor-pointer hover:border-b-5 border-white/60 h-7 ">
            ARCHIVED
          </li>
        </ul>
      </div>
      <div className="w-full mt-5 items-center justify-center flex flex-col">
        <div className="flex items-center justify-center p-5 rounded-full bg-[rgba(40,40,40,255)]">
          <FaRegEdit style={{ fontSize: "40px" }} />
        </div>
        <p className="text-md">Publish post</p>
        <p className="text-sm">
          Posts appear here after you publish and will be visible to your
          community
        </p>
      </div>
    </div>
  );
};
export default CreatePost;
