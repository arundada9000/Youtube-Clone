import React from "react";
import { MdDownloadForOffline } from "react-icons/md";

function DownloadsPage() {
  return (
    <div
      className={`mt-[60px] py-1 px-5 w-full max-w-[800px] flex gap-15 flex-wrap items-center justify-center`}
    >
      <div className="flex items-center justify-center">
        <MdDownloadForOffline
          style={{ fontSize: "150px", cursor: "pointer" }}
        />
      </div>
      <div className="flex flex-col gap-4 w-full flex-grow max-w-[500px]">
        <h1 className="font-semibold text-3xl">
          Keep watching when your connection drops
        </h1>
        <h2>
          With Premium, enjoy your favourite videos, even without Internet.
          Plus, get ad-free YouTube, YouTube Music, background play and more.
        </h2>
        <p className="text-[10px] ">
          One month for NPR 0 for eligible users. Price varies by country.
          Cancel at any time.{" "}
          <a href="#" className="text-blue-400">
            Terms apply
          </a>
        </p>
        <button className="text-md bg-blue-400 font-semibold text-black/90 rounded-4xl p-1 cursor-pointer max-w-[200px] py-1.5">
          Get YouTube Premium
        </button>
      </div>
    </div>
  );
}

export default DownloadsPage;
