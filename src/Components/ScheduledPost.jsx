import React from "react";
import { MdOutlineTimer } from "react-icons/md";

function ScheduledPost() {
  return (
    <div className="w-full mt-0 mb-10 items-center justify-center flex flex-col max-w-[900px]">
      <div className="flex items-center justify-center p-5 rounded-full bg-[rgba(40,40,40,255)]">
        <MdOutlineTimer style={{ fontSize: "40px" }} />
      </div>
      <p className="text-md">Schedule post</p>
      <p className="text-sm">Draft a post now and publish later</p>
    </div>
  );
}

export default ScheduledPost;
