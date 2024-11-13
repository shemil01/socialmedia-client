"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchProfile } from "@/redux/slices/userSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile: profile, userPosts: posts, loading } = useSelector(
    (state: RootState) => state.user
  );



  useEffect(() => {
    dispatch(fetchProfile())
    
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-72 h-[550px] p-5 flex flex-col items-center  rounded-lg shadow-lg">
      
    {/* Top-right icon */}
    <div className="self-end">
      <BsThreeDotsVertical />
    </div>
    
    {/* Profile section */}
    <div className="flex flex-col items-center mt-5">
      <MdAccountCircle size={80}  />
      <h1 className="text-xl font-semibold mt-3">{profile?.username}</h1>
    <p className="text-gray-300">{profile?.friends.length}.friends</p>
    <p>{profile?.bio}</p>
    </div>

    {/* Optional actions or info section */}
    <div className="mt-5">
<p>{posts?.length}.posts</p>

<div className="pt-10">
        {posts?.map((post) => (
          <div  key={post.id} className="flex space-x-1 space-y-1">
            <img src={post.postImage} className="w-24 h-20" alt="" />
            {/* <p>{post.content}</p> */}
        
          </div >
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProfilePage;
