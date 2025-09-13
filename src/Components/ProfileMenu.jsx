import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineSwitchAccount } from "react-icons/md";
import { PiSignOutThin } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiShieldUserLine } from "react-icons/ri";
import { BsMoon } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { RiUserForbidLine } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import InsideSetting from "./InsideSetting";

const ProfileMenu = ({ profileOpen }) => {
  const [insideProfileMenu, setInsideProfileMenu] = useState(false);
  const handleProfileInsideClick = () => {
    setInsideProfileMenu((prev) => !prev);
  };

  return (
    <div
      className={`flex-col absolute right-12 top-0 min-w-80 overflow-y-auto max-h-screen scrollbar-none w-48 bg-[rgba(40,40,40,255)] rounded-md shadow-lg z-10 ${
        profileOpen ? "flex" : "hidden"
      }`}
    >
      <div className="flex items-center justify-around p-4 border-b-2 border-white w-full">
        <FaUserCircle
          className="h-full "
          style={{ fontSize: "50px", color: "white" }}
        />
        <div className="flex flex-col ml-2">
          <p className="text-white font-bold">Arun Neupane</p>
          <p className="text-gray-300 text-sm">
            <span className="text-gray-400">@arunneupane4066</span>
          </p>
          <p className="text-gray-300 text-sm">
            <span className="text-blue-400">View your channel</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <FaGoogle style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Google Account</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <MdOutlineSwitchAccount style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md flex justify-between w-full h-full items-center">
          <span>Switch Account</span>
          <span>
            <MdKeyboardArrowRight
              style={{
                fontSize: "25px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer border-b-1 border-white hover:bg-[rgba(255,255,255,0.25)]">
        <PiSignOutThin style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Sign Out</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <SiYoutubestudio style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Youtube Studio</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 border-white border-b-1 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <RiMoneyDollarCircleLine style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Purchase and Membership</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <RiShieldUserLine style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Your data in YouTube</span>
      </div>
      <div>
        <div
          onClick={handleProfileInsideClick}
          className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]"
        >
          <BsMoon style={{ fontSize: "20px" }} />
          <span className="text-white p-2 text-md flex justify-between w-full h-full items-center">
            <span>Appearance : Device Theme</span>
            <span>
              <MdKeyboardArrowRight
                style={{
                  fontSize: "25px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </span>
          </span>
        </div>
        <div className="relative">
          <InsideSetting
            title="Appearance"
            description="Setting applies to this browser only"
            content={["Dark Theme", "Light Theme", "Use device theme"]}
            handleProfileInsideClick={handleProfileInsideClick}
            insideProfileMenu={insideProfileMenu}
          />
        </div>
      </div>
      <div>
        <div
          className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]"
          onClick={handleProfileInsideClick}
        >
          <IoLanguageOutline style={{ fontSize: "20px" }} />
          <span className="text-white p-2 text-md flex justify-between w-full h-full items-center">
            <span>Language</span>
            <span>
              <MdKeyboardArrowRight
                style={{
                  fontSize: "25px",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </span>
          </span>
        </div>

        <div className="relative">
          <InsideSetting
            title="Choose your Language"
            description={null}
            content={[
              "English",
              "Japanese",
              "French",
              "German",
              "Spanish",
              "Chinese",
              "Russian",
              "Portuguese",
              "Arabic",
              "Turkish",
              "Italian",
              "Korean",
              "Dutch",
              "Swedish",
              "Danish",
              "Finnish",
              "Norwegian",
              "Polish",
              "Czech",
              "Greek",
              "Hebrew",
              "Hindi",
              "Bengali",
              "Urdu",
              "Vietnamese",
              "Indonesian",
              "Thai",
              "Malay",
              "Filipino",
              "Swahili",
              "Zulu",
              "Xhosa",
              "Afrikaans",
              "Amharic",
              "Yoruba",
              "Igbo",
              "Hausa",
              "Somali",
              "Tigrinya",
              "Oromo",
              "Kurdish",
              "Pashto",
              "Farsi",
              "Punjabi",
              "Gujarati",
              "Marathi",
              "Tamil",
              "Telugu",
              "Kannada",
              "Malayalam",
              "Sinhala",
              "Burmese",
              "Khmer",
              "Lao",
              "Mongolian",
              "Nepali",
              "Uzbek",
              "Kazakh",
              "Turkmen",
              "Tajik",
              "Kyrgyz",
              "Azerbaijani",
              "Armenian",
              "Georgian",
              "Albanian",
              "Bosnian",
              "Croatian",
              "Serbian",
              "Slovenian",
              "Macedonian",
              "Montenegrin",
              "Bulgarian",
              "Romanian",
              "Hungarian",
              "Slovak",
              "Lithuanian",
              "Latvian",
              "Estonian",
              "Icelandic",
              "Welsh",
              "Irish",
              "Scottish Gaelic",
              "Breton",
              "Cornish",
              "Luxembourgish",
              "Maltese",
              "Galician",
              "Catalan",
              "Basque",
              "Esperanto",
              "Latin",
              "Sanskrit",
              "Ancient Greek",
              "Old English",
              "Middle English",
              "Old Norse",
              "Old Church Slavonic",
              "Classical Arabic",
              "Classical Chinese",
              "Classical Latin",
              "Classical Greek",
            ]}
            handleProfileInsideClick={handleProfileInsideClick}
            insideProfileMenu={insideProfileMenu}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <RiUserForbidLine style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md flex justify-between w-full h-full items-center">
          <span>Restricted Mode</span>
          <span>
            <MdKeyboardArrowRight
              style={{
                fontSize: "25px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <CiGlobe style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md flex justify-between w-full h-full items-center">
          <span>Location</span>
          <span>
            <MdKeyboardArrowRight
              style={{
                fontSize: "25px",
                color: "white",
                cursor: "pointer",
              }}
            />
          </span>
        </span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 border-white border-b-1 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <FaRegKeyboard style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Keyboard Shortcuts</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 border-white border-b-1 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <IoSettingsOutline style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Settings</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <IoHelpCircleOutline style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Help</span>
      </div>
      <div className="flex items-center gap-3 p-0 pl-4 w-full cursor-pointer hover:bg-[rgba(255,255,255,0.25)]">
        <MdOutlineFeedback style={{ fontSize: "20px" }} />
        <span className="text-white p-2 text-md">Send Feedback</span>
      </div>
    </div>
  );
};

export default ProfileMenu;
