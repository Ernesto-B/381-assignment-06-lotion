import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function TextEditor() {
    const [value, setValue] = useState('Your Note Here');

  return (
    <div id='editor-container' className="flex w-[100vw] h-[100vh]">
            <ReactQuill theme="snow" value={value} onChange={setValue} className="h-full w-full overflow-hidden"/>
    </div>
  )
}