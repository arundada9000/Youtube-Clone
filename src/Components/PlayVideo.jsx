import { IoMdClose } from "react-icons/io";
import React, { useEffect } from "react";

const PlayVideo = ({ data, open, setOpen }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
        open ? "opacity-100 flex" : "opacity-0 hidden"
      } items-center justify-center`}
    >
      <img src={data} alt="Title" className="w-full h-full object-contain" />
      <div className="absolute top-2 right-2">
        <IoMdClose
          style={{ color: "white", fontSize: "30px", cursor: "pointer" }}
          onClick={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default PlayVideo;
