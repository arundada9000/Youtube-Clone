import React from "react";
import { LiaHourglassHalfSolid } from "react-icons/lia";

function ArchivedPost() {
  return (
    <div className="w-full mt-0 mb-10 items-center justify-center flex flex-col max-w-[900px]">
      <div className="flex items-center justify-center p-5 rounded-full bg-[rgba(40,40,40,255)]">
        <LiaHourglassHalfSolid style={{ fontSize: "40px" }} />
      </div>
      <p className="text-md">Archive post</p>
      <p className="text-sm">
        Posts chosen to expire after 24 hr will appear in archive. Only you can see what's in your archive.
      </p>
    </div>
  );
}

export default ArchivedPost;
