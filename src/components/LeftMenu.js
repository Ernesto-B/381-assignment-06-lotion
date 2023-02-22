import React from 'react'
import { useState, useEffect } from 'react'

export default function LeftMenu(props) {
    const [note, setNote] = useState([]);
    const [noteCheck, setNoteCheck] = useState(false);

    const handleAddNote = () => {
        console.log('add note');
        setNote([
            {
                id: note.length,
                title: 'Untitled',
                date: '',
                content: '...'
            },
            ...note
        ])
    }

    // Testing to see if card title is overflowing
    const titleIsOverflown = (str) => {
        return str.length > 20;
    }

    // Placing an ellipsis at the end of the title string if it is overflowing
    const titleEllipsis = (str) => {
        if (titleIsOverflown(str)) {
            return str.slice(0, 24) + '...';
        } else {
            return str;
        }
    }

    // Testing to see if card content is overflowing
    const cardIsOverflown = (str) => {
        return str.length > 40;
    }

    // Placing an ellipsis at the end of the content string if it is overflowing
    const cardEllipsis = (str) => {
        if (cardIsOverflown(str)) {
            return str.slice(0, 70) + '...';
        } else {
            return str;
        }
    }

    // Testing if any cards are made
    useEffect(() => {
        if (note.length === 0) {
            setNoteCheck(false);
        } else {
            setNoteCheck(true);
        }
    }, [note])

  return (
    <div id='left-menu'>
        {props.showLeftMenu && <div id="notes-container" className="w-72 h-screen border-r-[2px] border-solid">
            <div id="notes-header" className='flex justify-between pl-4 h-12 align-middle border-b-[2px] border-solid text-gray-800 text-3xl font-bold'>
                <h1 className="inline">Notes</h1>
                <p className="flex float-right w-16 h-full justify-center hover:bg-slate-600 hover:text-white hover:cursor-pointer" onClick={handleAddNote}>+</p>
            </div>
            {!noteCheck && <div>
                <p className="flex w-full h-full justify-center pt-4 text-gray-600 font-medium text-xl" >No Notes Yet</p>
            </div>}
            <div id='cards' className="overflow-auto h-full">
                {note.map((note) => (
                    <div key={note.id} className="px-4 py-2 h-[7rem] border-b-[2px] border-solid text-gray-800 hover:bg-slate-600 hover:text-white hover:cursor-pointer active:bg-slate-600 active:text-white overflow-hidden">
                        <h1 className="inline font-bold text-xl">{note.id}{titleEllipsis(note.title)}</h1>
                        <p className="text-xs text-gray-500">{note.date}</p>
                        <p className="">{cardEllipsis(note.content)}</p>
                    </div>
                
                ))}
            </div>
        </div>}
    </div>
  )
}
