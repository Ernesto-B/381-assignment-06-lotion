// React imports
import { Link } from "react-router-dom";
import { useState } from "react";

// Component imports
import NoteInfo from "./NoteInfo";


const Sidebar = (props) => {

  const [activeNote, setActiveNote] = useState(false);

  return (
    <div id="notes-sidebar-container" className='border-r-2 overflow-y-auto select-none'>
      <div className='flex justify-between py-2 px-4 border-b-2'>
        <h1 className="text-2xl font-bold text-center">Notes</h1>
        <button className='text-xl hover:text-gray-600' onClick={props.onAddNote}>+</button>
      </div>
      <div>
        {props.notes.length > 0 ? props.notes.map((note, index) => {
          return (
            <Link to={`/notes/${index + 1}`} key={index}>
              <NoteInfo key={index} title={note.title} text={note.text} time={note.time}/>
            </Link>
          )
        }) : <p className="text-center py-2 text-gray-400">No Notes Yet</p>}
      </div>
    </div>
  );
}

export default Sidebar;