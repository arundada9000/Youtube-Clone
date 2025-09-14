import React from "react";
import { FaRegEdit } from "react-icons/fa";

function PublishedPost() {
  return (
    <div className="w-full mt-0 mb-10 items-center justify-center flex flex-col max-w-[900px] ">
      <div className="flex items-center justify-center p-5 rounded-full bg-[rgba(40,40,40,255)]">
        <FaRegEdit style={{ fontSize: "40px" }} />
      </div>
      <p className="text-md">Publish post</p>
      <p className="text-sm">
        Posts appear here after you publish and will be visible to your
        community
      </p>
    </div>
  );
}

export default PublishedPost;
