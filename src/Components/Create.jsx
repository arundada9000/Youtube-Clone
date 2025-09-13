import React, { useState } from "react";
import { RiVideoUploadLine } from "react-icons/ri";
import { MdLiveTv } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import UploadVideo from "./UploadVideo";
import { NavLink } from "react-router";
const Create = ({ createOpen }) => {
  const [open, setOpen] = useState(false);
  const uploadVideoClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`${
        createOpen ? "flex" : "hidden"
      } flex-col gap-4 absolute top-7 left-0 bg-[rgba(40,40,40,255)] transform -translate-x-2/3 p-4 rounded-2xl shadow-lg transition-all ease-in-out duration-300 min-w-42 z-20`}
    >
      <UploadVideo open={open} setOpen={setOpen} />

      <div className="flex gap-3 items-center" onClick={uploadVideoClick}>
        <RiVideoUploadLine />
        Upload Video
      </div>
      <div className="flex gap-3 items-center">
        <MdLiveTv />
        Go Live
      </div>
      <NavLink to="/create-post" className="flex gap-3 items-center">
        <IoCreateOutline />
        Create Post
      </NavLink>
    </div>
  );
};
export default Create;
