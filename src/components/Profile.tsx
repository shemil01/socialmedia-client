'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation'; // Adjust based on your router setup
import { fetchUserById } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import Image from 'next/image';

// Define UserProfileView Component
const UserProfileView: React.FC = () => {
  const dispatch = useDispatch();
  const { userId } = useParams(); // Assumes userId is passed in URL, adjust accordingly

  // Fetch profile data from Redux store
  const { userProfile: profile, userPosts: posts, loading } = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [dispatch, userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex items-center space-x-4">
        {profile?.profilePicture ? (
          <Image
            src={profile.profilePicture}
            alt={profile.username}
            width={80}
            height={80}
            className="rounded-full"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-300 rounded-full" />
        )}
        <div>
          <h2 className="text-xl font-semibold">{profile?.username}</h2>
          <p className="text-gray-500">{profile?.bio}</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <div key={post.id} className="relative w-full h-40 bg-gray-200">
            <Image
              src={post.postImage}
              alt="User post"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfileView;
