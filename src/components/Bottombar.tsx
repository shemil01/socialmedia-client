import React from 'react'
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Bottombar = () => {
  return (
    <div>
<div className='flex justify-around text-3xl items-end'>
    <IoMdHome/>
    <FaSearch />
    <CiCirclePlus />
    <IoChatboxEllipses />
    <MdAccountCircle />
</div>
    </div>
  )
}

export default Bottombar