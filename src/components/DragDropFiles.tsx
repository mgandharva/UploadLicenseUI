import { useState } from "react";
import React, { Component, MouseEvent , DragEvent} from 'react';

const DragDropFiles = () =>{
    const [files, setFiles] =useState<any|null>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleDragOver = (event: any) =>{
        event.preventDefault();
        console.log(event);
    };

    const handleOnDrop =(event: any) =>{
        event.preventDefault();
        console.log(event);
        setFiles(event.dataTransfer.files);
    };

    const handleUpload = () =>{};


    if (files) return (
        <div className="uploads">
            <ul>
                {Array.from(files).map((file:any, idx) => <li key={idx}>{file.name}</li>)}
            </ul>
            <div className="actions">
                <button onClick={() => setFiles(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>
            </div>

        </div>
    )

    return(
        <>
        {!files && (
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleOnDrop}
        >
            <h1>Drag and Drop Files to upload</h1>
            <h1>Or</h1>
            <input 
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
            />

            <button onClick={() => inputRef.current?.click()}>select files</button>
        </div>)}
        </>
    )
};

export default DragDropFiles;