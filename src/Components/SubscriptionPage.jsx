import React, { useState } from "react";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { IoIosList } from "react-icons/io";
import SubscriptionCard from "./SubscriptionCard";
import GridVideos from "./GridVideos";

function SubscriptionPage() {
  const [grid, setGrid] = useState(false);
  const handleClick = () => {
    setGrid(!grid);
  };
  return (
    <div className={`mt-[50px] py-1 w-full flex flex-col`}>
      <div className="flex-grow w-full flex items-center justify-between">
        <h1>Subscriptions</h1>
        <div className="flex gap-3 p-3 items-center">
          <button className="p-3 hover:bg-gray-800 transition-all duration-100 ease-initial rounded-full cursor-pointer text-blue-400 font-bold text-sm">
            Manage
          </button>
          <button
            className={`p-3 hover:bg-gray-800 transition-all duration-100 ease-initial rounded-full cursor-pointer ${
              grid ? "text-blue-300" : "text-white"
            }`}
            onClick={handleClick}
          >
            <BsGrid3X2GapFill
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
          </button>
          <button
            className={`p-3 hover:bg-gray-800 transition-all duration-100 ease-initial rounded-full cursor-pointer ${
              grid ? "text-white" : "text-blue-300"
            }`}
            onClick={handleClick}
          >
            <IoIosList style={{ fontSize: "20px", cursor: "pointer" }} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col ">
        {grid ? (
          <>
            <GridVideos />
            <GridVideos />
            <GridVideos />
            <GridVideos />
          </>
        ) : (
          <>
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
          </>
        )}
      </div>
    </div>
  );
}

export default SubscriptionPage;
