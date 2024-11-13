'use client'
import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { SearchToggle } from "./SearchToggle";

export const Sidebar = () => {
  const [isMenuOpen,setIsMenuOpen] = useState<boolean>(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close
  };

  return (
    <div className="w-56 h-screen relative">
      <div className="flex-col space-y-16 ml-10 mt-10 text-2xl items-end">
        <IoMdHome />
        <FaSearch  onClick={handleToggleMenu} className="cursor-pointer" />
        <CiCirclePlus />
        <IoChatboxEllipses />
        <IoMdNotifications />
        <MdAccountCircle />
      </div>
        <div className="top-2 ml-10 z-10 absolute left-10">
        {isMenuOpen && <SearchToggle/>}
      </div>
      
    </div>
  );
};
