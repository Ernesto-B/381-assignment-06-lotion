import React from 'react'
import { useState } from 'react'
import  LeftMenu  from './LeftMenu';

export default function Header() {
  const [showLeftMenu, setShowLeftMenu] = useState(true);

  const handleClick = () => {
    setShowLeftMenu(!showLeftMenu);
  }

  return (
    <div id='container'>
      
      
    
      <div className="flex flex-col justify-center items-center pt-3 pb-3  border-b-[2px] border-gray-200">
          <p className="flex absolute w-16 h-16 left-4 text-3xl items-center justify-center font-bold hover:bg-gray-600 hover:text-white hover:cursor-pointer" onClick={handleClick}>&#9776;</p>
          <h1 className="text-black text-4xl font-bold">Lotion</h1>
          <h2 className="font-bold text-gray-500 text-s">Like notion, but worse</h2>
      </div>
      <LeftMenu showLeftMenu={showLeftMenu} />
    </div>
  )
}
