import React from 'react'

export const SearchToggle = () => {
 
  return (
  <div className="w-72 h-[480px] p-5 flex flex-col rounded-lg shadow-lg">
<div className='space-y-2'>
    {/* <h1>Search</h1> */}
    <input type="text " placeholder='search'  className='border rounded-md focus:outline-none border-gray-300 px-3' />
</div>
  </div>
  )
}
