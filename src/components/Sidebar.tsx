import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

export const Sidebar = () => {
  return (
    <div className="w-56 h-screen">
      <div className="flex-col space-y-16 ml-10 mt-10 text-2xl items-end">
        <IoMdHome />
        <FaSearch />
        <CiCirclePlus />
        <IoChatboxEllipses />
        <IoMdNotifications />
        <MdAccountCircle />
      </div>
    </div>
  );
};
