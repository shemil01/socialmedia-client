'use client'
import { MessageCard } from '@/components/MessageCard'
import Navbar from '@/components/Navbar'
import { Notification } from '@/components/Notification'
import { Postcard } from '@/components/Postcard'
import { Sidebar } from '@/components/Sidebar'
import ProfilePage from '@/components/userProfail'
import React, { useState } from 'react'


const Home = () => {
  const [activePage, setActivePage] = useState< 'profile' | 'notifications' | 'messages'>('profile');

  const renderContent = () => {
    switch (activePage) {
      case 'profile':
      return <ProfilePage/>
      case 'messages':
        return <MessageCard/>
        case 'notifications':
          return <Notification/>

          default:
            return (
              <div className="flex items-center flex-col ">
                <div className="flex items-center space-x-2 font-bold mb-4">
                  <div className="border border-gray-300 px-5 py-2 rounded-full">For You</div>
                  <div className="border border-gray-300 px-5 py-2 rounded-full">Following</div>
                </div>
                <div className="flex justify-center">
                  <Postcard />
                </div>
              </div>
            )
    }
  }
  return (
    <div>
      <Navbar
      onProfileClick={() => setActivePage('profile')}
      onNotificationClick={() => setActivePage('notifications')}
      onMessageClick={() => setActivePage('messages')}
      />
      
      {/* Main layout container */}
      <div className="flex justify-around">
        
        {/* Sidebar with fixed width */}
        <div className="w-1/4 md:min-w-[400px]">
          <Sidebar />
        </div>
        
        {/* Main content area */}
        <div className="flex items-center flex-col ">
          <div className="flex items- space-x-2 font-bold mb-4">
            <div className="border border-gray-300 px-5 py-2 rounded-full">For You</div>
            <div className="border border-gray-300 px-5 py-2 rounded-full">Following</div>
          </div>
          
          <div className="flex justify-center">
            <Postcard />
          </div>
        </div>
         <div className=''>
         {renderContent()}
         </div>
      </div>
    </div>
  )      
}

export default Home
