import React from "react";

const ProfileMenu = ({
  title = "",
  description = null,
  content = [],
  handleProfileInsideClick,
  insideProfileMenu,
}) => {
  return (
    <div
      className={`flex-col absolute right-[0px] top-5 min-w-80 max-h-92 overflow-auto bg-[rgba(40,40,40,255)]
    ${insideProfileMenu ? "flex z-100" : "hidden -z-10"}
    `}
    >
      <div className="flex border-b-1 border-white p-2 w-full items-center ">
        <button onClick={handleProfileInsideClick}>Button</button>
        <p>{title}</p>
      </div>
      {description && (
        <div className="p-2 text-sm w-full items-center justify-center">
          {description}
        </div>
      )}
      <div className="flex flex-col p-2 w-full ">
        {content.length > 0 ? (
          content.map((c, index) => (
            <div key={`${c}-${index}`} className="p-2">
              {c}
            </div>
          ))
        ) : (
          <div className="p-2">No content available</div>
        )}
      </div>
    </div>
  );
};

export default ProfileMenu;
