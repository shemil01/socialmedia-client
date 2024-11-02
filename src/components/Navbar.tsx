import React from "react";
// import { IoMdHome } from "react-icons/io";

import { IoMdNotifications } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between pr-5 pl-5 text-3xl mt-5 items-center">
        <div className="flex space-x-5 items-center">
          <img
            src="https://www.designevo.com/res/templates/thumb_small/green-bubble-and-forum.webp"
            className="w-20 h-20 "
            alt=""
          />
          {/* <div className="flex items-center md:space-x-2">
            <input
              type="text"
              placeholder="search..."
              className="border px-3 py-2 text-sm border-gray-300 rounded-lg "
            />
            <FaSearch />
          </div> */}
        </div>
        <div className="flex items-center md:space-x-20">
          <IoMdNotifications />
          <IoChatboxEllipses />
          <MdAccountCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
