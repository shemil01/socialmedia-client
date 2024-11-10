import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

export const MessageCard = () => {
  return (
    <div className="w-72 h-[550px] p-5 flex flex-col items-center rounded-lg shadow-lg">
      
    {/* Top-right icon */}
    <div className="self-end">
      <BsThreeDotsVertical />
    </div>
    
    {/* Message section */}
    <div className="flex flex-col items-center mt-5">
      <FiMessageSquare size={80} />
      <h1 className="text-xl font-semibold mt-3">Messages</h1>
      <p className="text-gray-300">You have 5 new messages</p>
    </div>

    {/* Message content or list */}
    <div className="mt-5">
      <p className="text-gray-600">Recent messages will appear here...</p>
      {/* Optionally, map over messages to display each */}
    </div>
  </div>
  )
}
