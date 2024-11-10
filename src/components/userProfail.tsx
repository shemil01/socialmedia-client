"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchProfile } from "@/redux/slices/userSlice";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const ProfilePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile: profile, loading } = useSelector(
    (state: RootState) => state.user
  );


useEffect(() => {
    dispatch(fetchProfile())
      .unwrap() // This helps to handle asynchronous results if needed
      .then((profileData) => {
        console.log("Fetched profile data:", profileData); // Log data here
      })
      .catch((error) => console.error("Failed to fetch profile:", error));
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
<p>posts</p>
    </div>
  </div>
  );
};

export default ProfilePage;
