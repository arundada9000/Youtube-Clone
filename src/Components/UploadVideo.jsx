import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import { MdFileUpload } from "react-icons/md";
import useTheme from "../hooks/useTheme";

const UploadVideo = ({ open, setOpen }) => {
  const { theme, ToggleTheme } = useTheme();

  return (
    <div
      className={`z-60 rounded-xl  fixed top-[0px] -left-[700px] flex-col ${
        open ? "flex" : "hidden"
      }
      ${
        theme === "dark"
          ? "bg-[rgba(40,40,40,255)] text-white"
          : "bg-white text-black"
      }
      `}
    >
      <div className="flex w-full justify-between items-center p-3  border-b-1 border-white/90 ">
        <h1>Upload Videos</h1>
        <div className="flex gap-5 px-5">
          <RiFeedbackLine
            className="hover:bg-gray-500/50"
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
          <IoCloseOutline
            onClick={() => setOpen(!open)}
            className="hover:bg-gray-500/50"
            style={{ fontSize: "25px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div>
        <div className="p-5 w-full flex-col cursor-pointer  flex items-center justify-center pt-10">
          <div className="bg-[rgba(31,31,31,255)] rounded-full p-5">
            <MdFileUpload
              style={{
                fontSize: "100px",
                cursor: "pointer",
                color: "rgba(144,144,144,255)",
              }}
            />
          </div>
          <p className="mt-8 text-white">Drag and drop video files to upload</p>
          <p className="text-sm text-gray-400">
            Your videos will be private until you publish them.
          </p>
          <span className="my-10 cursor-pointer bg-white text-black text-sm p-2 px-5 rounded-4xl font-semibold">
            Select files
          </span>
          <p
            className={`text-[13px] 
          ${theme === "dark" ? "text-gray-400" : "text-gray-800"}`}
          >
            By submitting your videos to YouTube, you acknowledge that you agree
            to YouTube's{" "}
            <a href="#" className="text-blue-400">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-400">
              Community Guidelines
            </a>
            .
          </p>
          <p
            className={`text-[13px] ${
              theme === "dark" ? "text-gray-400" : "text-gray-800"
            }`}
          >
            Please make sure that you do not violate others' copyright or
            privacy rights.{" "}
            <a href="#" className="text-blue-400">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UploadVideo;
