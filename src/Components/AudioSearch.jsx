import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";

const AudioSearch = ({ listening, handleMicrophoneClick }) => {
  const [isListening, setIsListening] = useState(true);
  const microphoneClick = () => {
    setIsListening(!isListening);
  };
  return (
    <div
      className={`absolute flex-col top-10 right-0 p-4 rounded shadow-lg transition-all ease-in-out duration-300
    min-w-96 bg-[rgba(0,0,0,0.85)]
    ${listening ? "flex" : "hidden"}
    `}
    >
      <div className="relative w-full min-h-70 p-4 text-xl">
        <label htmlFor="">
          {isListening ? "Listening..." : "Microphone is off"}
        </label>
        <IoMdClose
          onClick={handleMicrophoneClick}
          style={{
            fontSize: "30px",
            color: "white",
            cursor: "pointer",
            position: "absolute",
            top: "-15px",
            right: "-10px",
          }}
        />
      </div>
      <div className="flex flex-col  items-center w-full h-[100px]">
        <div
          className={`rounded-full p-4 w-fit ${
            isListening ? "bg-red-500" : "bg-gray-500"
          }`}
        >
          <FaMicrophone
            onClick={microphoneClick}
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
          />
        </div>
        <label
          htmlFor=""
          className={`${!isListening ? "block" : "hidden"} text-sm`}
        >
          Tap the Microphone to try again
        </label>
      </div>
    </div>
  );
};

export default AudioSearch;
