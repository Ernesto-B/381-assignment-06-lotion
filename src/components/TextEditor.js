import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


export default function TextEditor() {

    const { quill, quillRef } = useQuill();

  return (
    <div>
        <div ref={quillRef} />
    </div>
  )
}
