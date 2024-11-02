// import Bottombar from '@/components/Bottombar'
import Navbar from '@/components/Navbar'
import { Postcard } from '@/components/Postcard'
import { Sidebar } from '@/components/Sidebar'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      
      {/* Main layout container */}
      <div className="flex">
        
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
      </div>
    </div>
  )      
}

export default Home
