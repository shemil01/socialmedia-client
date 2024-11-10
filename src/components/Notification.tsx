import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
export const Notification = () => {
  return (
    <div className="w-72 h-[550px] p-5 flex flex-col items-center rounded-lg shadow-lg">
      
    {/* Top-right icon */}
    <div className="self-end">
      <BsThreeDotsVertical />
    </div>
    
    {/* Notification section */}
    <div className="flex flex-col items-center mt-5">
      <IoNotificationsOutline size={80} />
      <h1 className="text-xl font-semibold mt-3">Notifications</h1>
      <p className="text-gray-300">You have 3 new notifications</p>
    </div>

    {/* Notification content or list */}
    <div className="mt-5">
      <p className="text-gray-600">Recent notifications will appear here...</p>
      {/* Optionally, map over notifications to display each */}
    </div>
  </div>
  )
}
