// React imports
import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

// Component imports
import Header from "../components/Header"
import Sidebar from "../components/LeftSidebar"


const Layout = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  
  let navigate = useNavigate();

  const handleAddNote = () => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = { title: 'Untitled', text: '', html: '', time: ''};
    const updatedNotes = [ newNote, ...savedNotes];
    setNotes(updatedNotes);
    navigate(`/notes/1`);
  }

  const handleNoteChange = (htmlEdit, id, textEdit, titleEdit, timeEdit) => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = savedNotes.map((note, index) => {
      if (index === id - 1) {
        return {
          ...note,
          text: textEdit,
          title: titleEdit,
          time: timeEdit,
          html: htmlEdit
        }
      }
      return note;
    });
    setNotes(updatedNotes);
  }
  
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };


  return (
    <div className="flex flex-col h-screen">
      <Header onToggleSidebar={handleToggleSidebar} />
      <div id="main-screen-container" className="flex-1 grid grid-cols-4">
        {sidebarOpen && (
          <Sidebar className="flex-grow" onAddNote={handleAddNote} notes={notes} />
        )}
        {sidebarOpen ? 
        <div id="editor-container" className="col-span-3">
          <Outlet context={[notes, handleNoteChange]} />
        </div>:
        <div id="editor-container" className="col-span-4">
          <Outlet context={[notes, handleNoteChange]} />
        </div>}
        
      </div>
    </div>
  )
}

export default Layout