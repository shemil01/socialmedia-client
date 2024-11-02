import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart ,FaRegCommentAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const Postcard = () => {
  return (
    <div>
      <div className="rounded-lg mt-10 border border-gray-300 w-[500px] h-[400px]">
        <div className="flex justify-between pl-5 pr-5 pt-5 ">
          <div className="flex space-x-3 items-center">
            <span className="text-3xl">
              <MdAccountCircle />
            </span>
            <p>shemil</p>
          </div>
          <div>
            <span className="text-3xl">
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div>
          <img
            src="https://thumbs.dreamstime.com/b/tropical-island-paradise-sea-beach-ocean-water-green-coconut-palm-tree-leaves-sand-sun-blue-sky-cloud-beautiful-nature-landscape-317237458.jpg"
            alt=""
            className="w-full h-full pl-5 pr-5"
          />
        </div>
        <div className="flex space-x-10 text-xl pr-5 pl-5 pt-2">
<FaRegHeart/>
<FaRegCommentAlt/>
<FiSend/>
        </div>
      </div>
    </div>
  );
};
