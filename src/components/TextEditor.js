import React from 'react'
import { useQuill } from 'react-quill';
import 'quill/dist/quill.snow.css';


export default function TextEditor() {

    const { quill, quillRef } = useQuill();

  return (
    <div>
        <div className="w-40 h-40">
            <div ref={quillRef} />
        </div>
    </div>
  )
}
