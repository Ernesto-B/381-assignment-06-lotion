import React from 'react'
import { useState, useEffect } from 'react'

export default function LeftMenu(props) {
    const [note, setNote] = useState([]);

    const handleAddNote = () => {
        console.log('add note');
        setNote([
            {
                id: note.length,
                title: 'test',
                content: 'some content'
            },
            ...note
        ])
    }

  return (
    <div>
        {props.showLeftMenu && <div id="container" className="w-1/5 h-screen border-r-[2px] border-solid">
            <div id="header" className='flex justify-between pl-4 h-12 align-middle border-b-[2px] border-solid text-gray-800 text-3xl font-bold'>
                <h1 className="inline">Notes</h1>
                <p className="flex float-right w-16 h-full justify-center hover:bg-slate-600 hover:text-white hover:cursor-pointer" onClick={handleAddNote}>+</p>
            </div>
            <div>
                {note.map((note) => (
                    <div key={note.id} className="px-4 py-2 h-[7rem] border-b-[2px] border-solid text-gray-800 hover:bg-slate-600 hover:text-white hover:cursor-pointer">
                        <h1 className="inline font-bold text-xl">{note.id}{note.title}</h1>
                        <p className="">{note.content}</p>
                    </div>
                
                ))}
            </div>
        </div>}
    </div>
  )
}
