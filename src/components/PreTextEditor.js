import React from 'react'

export default function PreTextEditor() {
    

  return (
    <div id='pre-text-editor-container' className="h-[5rem]">
        <form>
            <input type="text" className="pl-4 pr-4 pt-4 border-0 text-2xl focus:outline-none " placeholder="Untitled"></input>
        </form>
        <input className="pl-4 pr-4 pb-4" type="datetime-local" />
      <p className="flex absolute h-[5rem] w-[5rem] justify-center items-center right-24 top-[93px] text-xl hover:bg-gray-600 hover:text-white hover:cursor-pointer">Save</p>
      <p className="flex absolute h-[5rem] w-[5rem] justify-center items-center right-4 top-[93px] text-xl hover:bg-gray-600 hover:text-white hover:cursor-pointer">Delete</p>
    </div>
  )
}
